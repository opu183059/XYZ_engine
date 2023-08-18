import { createRef, useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import ResultPDF from "react-to-pdf";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Result = () => {
  const { formData } = useContext(Authcontext);
  const {
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
  } = formData || {};

  // code for download pdf
  const ref = createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [10, 15],
  };

  return (
    <div className="flex justify-center">
      <div className="container p-2 mx-auto rounded-md sm:p-4">
        <div ref={ref}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-2">
              <thead className="rounded-t-lg bg-gray-200">
                <tr className="text-center">
                  <th className="p-3">Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Contractor</th>
                  <th className="p-3">Max of X</th>
                  <th className="p-3">Min of X</th>
                  <th className="p-3">Max of Y</th>
                  <th className="p-3">Min of Y</th>
                  <th className="p-3">Max of Z</th>
                  <th className="p-3">Min of Z</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-3">{name}</td>
                  <td className="p-3">{description}</td>
                  <td className="p-3">{client}</td>
                  <td className="p-3">{contractor}</td>
                  <td className="p-3">{maxX}</td>
                  <td className="p-3">{minX}</td>
                  <td className="p-3">{maxY}</td>
                  <td className="p-3">{minY}</td>
                  <td className="p-3">{maxZ}</td>
                  <td className="p-3">{minZ}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            {csvData.length > 0 && (
              <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={csvData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="KP" />
                    <YAxis dataKey="X" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="X"
                      stroke="#0022fd"
                      fill="#328ace"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
        <ResultPDF targetRef={ref} filename="Result.pdf" options={options}>
          {({ toPdf }) => (
            <div className="flex justify-center">
              <button
                onClick={toPdf}
                className="px-3 py-2 bg-blue-800 text-white cursor-pointer rounded-lg mb-5"
              >
                Download Results
              </button>
            </div>
          )}
        </ResultPDF>
      </div>
    </div>
  );
};

export default Result;
