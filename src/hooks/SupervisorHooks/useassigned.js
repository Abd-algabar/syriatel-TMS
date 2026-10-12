import { useCallback, useEffect, useState } from "react";
import { TrainerAcceptOrRejectApplicationApi } from "../../Api/SupervisorApi/assignedApi";
import { getMyTraineesApi } from "../../Api/SupervisorApi/supervisorApi";

export default function useAssigned() {
  const [loadingAction, setLoadingAction] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [myTrainees,setMyTrainees]=useState([])
  const TrainerAcceptOrRejectApplication = useCallback(
    async (applicationId, type) => {
      setLoadingAction(`${type}-${applicationId}`);

      try {
        const data = await TrainerAcceptOrRejectApplicationApi(
          applicationId,
          type,
        );

        setLoadingAction("");
        return data;
      } catch (error) {
        console.log(error);
        setError(error);
        setLoadingAction("");
      }
    },
    [],
  );

  const getMyTrainees = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getMyTraineesApi();   
      setMyTrainees(data.data)
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    // loading
    loading,
    loadingAction,

    // operation
    TrainerAcceptOrRejectApplication,
    getMyTrainees,
    // error
    error,

    // data
    myTrainees
  };
}
