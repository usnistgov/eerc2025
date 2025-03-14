import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { Select, Tooltip, type SelectProps } from "antd";
import { PropsWithChildren, useEffect, useMemo, type Key } from "react";
import { Observable, of, type Subject } from "rxjs";

// export type DropdownProps = {
// 	className?: string;
// 	disabled?: boolean;
// 	placeholder?: string;
// 	showSearch?: boolean;
// 	value?: string;
// 	label?: string;
// };

// export type Dropdown<T> = {
// 	change$: Observable<T>;
// 	selectSearch$: Observable<T>;
// 	component: React.FC<PropsWithChildren & DropdownProps>;
// };

type DropdownProps<T extends Key> = {
	className?: string;
	label?: string;
	options: Observable<T[]> | T[];
	value$: Observable<T>;
	wire: Subject<T>;
	placeholder?: string;
	tooltip?: string;
};

/**
 * Creates a dropdown component and its associated change stream.
 */

export default function Dropdown<T extends Key>({
	children,
	options,
	value$,
	wire,
	tooltip,
	...selectProps
}: PropsWithChildren<DropdownProps<T>> & Omit<SelectProps, "onChange" | "value" | "options">) {
	const { change$, change, useValue, useOptions } = useMemo(() => {
		const [change$, change] = createSignal<T>();
		const [useValue] = bind(value$, undefined);

		const [useOptions] = bind(Array.isArray(options) ? of(options) : options, []);

		return { change$, change, useValue, useOptions };
	}, [value$, options]);

	useEffect(() => {
		const sub = change$.subscribe(wire);
		return () => sub.unsubscribe();
	}, [wire, change$]);

	return (
		<Tooltip title={tooltip}>
			<Select onChange={(value) => change(value)} value={useValue()} {...selectProps}>
				{children}
				{useOptions().map((option) => (
					<Select.Option key={option} value={option}>
						{option.toString()}
					</Select.Option>
				))}
			</Select>
		</Tooltip>
	);
}
