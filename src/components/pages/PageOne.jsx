import Papa from "papaparse";
import { useContext, useState } from "react";
import { Authcontext } from "../provider/Authprovider";
import { useNavigate } from "react-router-dom";
const PageOne = () => {
  const navigate = useNavigate();
  const { setFormData } = useContext(Authcontext);
  const [csvData, setCsvData] = useState([]);
  const [csvUpdated, setCsvUpdated] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCSV = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setCsvData(results.data);
        setCsvUpdated(true);
      },
    });
  };

  const xValues = csvData.map((item) => parseFloat(item.X));
  const yValues = csvData.map((item) => parseFloat(item.Y));
  const zValues = csvData.map((item) => parseFloat(item.Z));

  // min max of X
  const maxX = Math.max(...xValues);
  const minX = Math.min(...xValues);
  // min max of Y
  const maxY = Math.max(...yValues);
  const minY = Math.min(...yValues);
  // min max of Z
  const maxZ = Math.max(...zValues);
  const minZ = Math.min(...zValues);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const client = form.client.value;
    const contractor = form.contractor.value;
    const maxX = form.maxX.value;
    const minX = form.minX.value;
    const maxY = form.maxY.value;
    const minY = form.minY.value;
    const maxZ = form.maxZ.value;
    const minZ = form.minZ.value;

    setFormData({
      name,
      description,
      client,
      contractor,
      csvData,
      maxX,
      minX,
      maxY,
      minY,
      maxZ,
      minZ,
    });

    setButtonDisabled(false);
  };

  const result = () => {
    navigate("/result");
  };
  return (
    <div>
      <h1 className="text-2xl text-blue-800 font-bold mb-5">
        Please fillup the form
      </h1>
      <form onSubmit={handleOnSubmit}>
        <div className="col-span-full">
          <label>Project Name:</label>
          <input
            required
            name="name"
            type="text"
            className="w-full p-1 border-[1px] border-blue-800 rounded-md"
          />
        </div>
        <div className="col-span-full">
          <label>Project Description:</label>
          <textarea
            required
            name="description"
            type="text"
            className="border-[1px] p-1 border-blue-800 rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label>Client:</label>
            <input
              required
              name="client"
              type="text"
              className="w-full p-1 border-[1px] border-blue-800 rounded-md"
            />
          </div>
          <div className="">
            <label>Contractor:</label>
            <input
              required
              name="contractor"
              type="text"
              className="w-full p-1 border-[1px] border-blue-800 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label>Upload CSV file: </label>
          <input onChange={handleCSV} type="file" accept=".csv" name="csv" />
        </div>
        {csvUpdated ? (
          <div className="max_min_Data grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="">Max Value of X</label>
              <input
                readOnly
                type="text"
                name="maxX"
                value={maxX}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of X</label>
              <input
                readOnly
                type="text"
                name="minX"
                value={minX}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Max Value of Y</label>
              <input
                readOnly
                type="text"
                name="maxY"
                value={maxY}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of Y</label>
              <input
                readOnly
                type="text"
                name="minY"
                value={minY}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Max Value of Z</label>
              <input
                readOnly
                type="text"
                name="maxZ"
                value={maxZ}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of Z</label>
              <input
                readOnly
                type="text"
                name="minZ"
                value={minZ}
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
          </div>
        ) : (
          <div className="max_min_Data grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="">Max Value of X</label>
              <input
                required
                type="text"
                name="maxX"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of X</label>
              <input
                required
                type="text"
                name="minX"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Max Value of Y</label>
              <input
                required
                type="text"
                name="maxY"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of Y</label>
              <input
                required
                type="text"
                name="minY"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Max Value of Z</label>
              <input
                required
                type="text"
                name="maxZ"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="">Min Value of Z</label>
              <input
                required
                type="text"
                name="minZ"
                className="w-full p-1 border-[1px] border-blue-800 rounded-md"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <small>Click submit to see result</small>
          <div>
            <input
              type="submit"
              className="px-3 py-2 bg-blue-800 text-white cursor-pointer rounded-lg mt-5"
            />
            <button
              disabled={buttonDisabled}
              onClick={result}
              className={`ms-4 px-3 py-2 cursor-pointer rounded-lg mt-5 ${
                buttonDisabled
                  ? "bg-gray-400 text-black"
                  : "bg-blue-800 text-white"
              }`}
            >
              See Result
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageOne;
