
import api from "../axios";

export const getMyInterview = async () => {

  const response = await api.get("application/trainer/interview");

  console.log(response.data)
  return response.data
}

export const SetInterviewResult =async(id,formData)=>{ 
  console
  .log( "Body",formData)
  console.log(id)
  const response = await api.patch(`application/trainer/${id}/interview/result`,formData);
  console.log(response.data)
  return response.data
}


export const getMyTraineesApi =async()=>{ 
  const response = await api.get('trainee/trainer');
  console.log(response.data)
  return response.data
}
  