import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import OverTimeRequestService from "../../../services/common/OvertimeService";
import { RequestStatus } from "../../../constant/requestStatus";
import { toast } from "react-toastify";
import OverTimeTable from "../../shared/common/OverTimeTable";

const DirectorOverTime = () => {
  const { auth } = useAppSelector((state) => state.persistedReducer);
  const [requests, setRequests] = useState<any>([]);
  const [selectedData, setSelectedData] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retriveData();
  }, []);
  const retriveData = () => {
    setLoading(true);
    setTimeout(() => {
      OverTimeRequestService.getOverTimeRequests(auth?.user?.token)
        .then((res) => {
          setRequests(res.data);
        })
        .then((e) => {
          console.log(e);
        });
      setLoading(false);
    }, 500);
  };

  //send approval request
  const sendApprove = () => {
    console.log(selectedData);
    setLoading(true);
    setTimeout(() => {
      OverTimeRequestService.sendDirectorApproval(
        selectedData,
        auth?.user?.token,
        RequestStatus.APPROVED
      )
        .then((res) => {
          if (res.data) {
            toast.success("Overtime Request is Confirmed");
          } else {
            toast.error("Request cannot be performed");
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error("Request cannot be performed");
        });
      setLoading(false);
      retriveData();
    }, 500);
  };
  //send reject request
  const sendReject = () => {
    setLoading(true);
    setTimeout(() => {
      OverTimeRequestService.sendDirectorApproval(
        selectedData,
        auth?.user?.token,
        RequestStatus.DISAPPROVED
      )
        .then((res) => {
          if (res.data) {
            toast.warning("Overtime Request is Declined");
          } else {
            toast.error("Request cannot be performed");
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error("Request cannot be performed");
        });
      retriveData();
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <div className="admin-page-title">
        <p>Overtime Request</p>

        <hr className="admin-horizontal-line" />
      </div>

      <div className="admin-table-section">
        <div className="flex justify-end mb-4">
          <button className="action-com-model-sucess-btn" onClick={sendApprove}>
            Approve Selected
          </button>
          <button
            className="action-com-model-error-btn"
            type="reset"
            color="error"
            onClick={sendReject}
          >
            Reject Selected
          </button>
        </div>

        <OverTimeTable
          setSelectedData={setSelectedData}
          requests={requests}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default DirectorOverTime;
