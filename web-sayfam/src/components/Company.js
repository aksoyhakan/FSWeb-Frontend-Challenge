import axios from "axios";

export default function Company(props) {
  const { data } = props;
  return (
    <div
      onClick={() => {
        axios.delete(
          `https://hakan-aksoy-database.vercel.app/registedForms/${data.id}`
        );
      }}
      className="text-center text-3xl bg-slate-300 border-2 border-solid border-slate-600 px-5 py-10 rounded-2xl hover:bg-slate-500 transition-all mb-10"
    >
      <p>Company Name: {data.company}</p>
      <p>Expectation: {data.expectation}</p>
      <p>Salary: {data.salary} TL</p>
      <p>Working Type: {data.workingType}</p>
    </div>
  );
}
