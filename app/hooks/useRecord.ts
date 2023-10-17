import { useParams } from "next/navigation";
import { useMemo } from "react";

const useRecord = () => {
	const params = useParams();

	const recordId = useMemo(() => {
		if (!params?.recordId) return "";

		return params.recordId as string;
	}, [params]);

	const isOpen = useMemo(() => !!recordId, [recordId]);

	return useMemo(() => ({ isOpen, recordId }), [isOpen, recordId]);
};

export default useRecord;
