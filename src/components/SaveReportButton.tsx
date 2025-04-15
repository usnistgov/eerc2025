import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import "./styles.css";

export const SaveReportButton: React.FC<{
	realRate$: Observable<number>;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	dataTestId: string;
}> = (props) => {
	const { realRate$, onClick, dataTestId } = props;
	const [real, setReal] = useState<number>(0);
	useEffect(() => {
		const subscription = realRate$.subscribe(setReal); // Subscribe to sector observable
		return () => subscription.unsubscribe(); // Cleanup subscription on unmount
	}, [realRate$]);
	return (
		<Space>
			<Button
				className={`mt-2 ${real ? "blue" : ""}`}
				icon={<FilePdfOutlined />}
				disabled={real == 0}
				onClick={onClick}
				data-test-id={dataTestId}
			>
				Save Report (PDF)
			</Button>
		</Space>
	);
};
