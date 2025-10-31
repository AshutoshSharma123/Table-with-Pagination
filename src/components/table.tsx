import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import "primereact/resources/primereact.min.css";



export default function PaginatorBasicDemo() {
  const [customers] = useState([
    { title: "The Starry Night", place: "Netherlands", artist: "Vincent van Gogh", startDate: "1889", endDate: "1889" },
    { title: "Mona Lisa", place: "Italy", artist: "Leonardo da Vinci", startDate: "1503", endDate: "1506" },
    { title: "The Persistence of Memory", place: "Spain", artist: "Salvador Dalí", startDate: "1931", endDate: "1931" },
    { title: "Girl with a Pearl Earring", place: "Netherlands", artist: "Johannes Vermeer", startDate: "1665", endDate: "1665" },
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [visible, setVisible] = useState(false);
  const op = useRef(null); 
  

  const toggleOverlay = (event) => {

    console.log(event);
    
    if(visible){
      op.current.hide();
      setVisible(false);
    }
    else{
      op.current.show(event);
      setVisible(true);
    }
    
  };
const [artworks, setArtworks] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);


    useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=1`);
        const data = await response.json();
        console.log(data.data);
        

      } 
      
      
      catch (error) {
     console.log("Error fetching artworks:", error);
      }
    };
    fetchInfo();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">



          <OverlayPanel ref={op}>
        <div className="p-3 text-sm text-gray-700">
          <input type="number" placeholder="enter number of rows to be selected" className="border border-gray-300 rounded-md p-1" />
          <button className="ml-2 bg-blue-500 text-white rounded-md px-2 py-1">Select</button>
        </div>

      </OverlayPanel>
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <div className="overflow-hidden rounded-xl border border-gray-300">
          <DataTable
            value={customers}
            selectionMode="checkbox"
            selection={selectedCustomers}
            onSelectionChange={(e) => setSelectedCustomers(e.value)}
            paginator
            rows={10}
            className="w-full text-gray-800"
            stripedRows
          >
            <Column
              selectionMode="multiple"
              header={
                <div
                  onClick={toggleOverlay}
                  className="flex items-center justify-center gap-2 cursor-pointer select-none group"
                  
                >
                  <span className={`text-gray-500 text-sm ${visible} ? "rotate-180  transition-transform text-gray-900" : ""}`}>
                    ▼
                  </span>
                </div>
              }
              headerStyle={{ width: "3rem" }}
            />

            <Column field="title" header="Title" style={{ width: "20%" }} />
            <Column field="place" header="Place of Origin" style={{ width: "20%" }} />
            <Column field="artist" header="Artist" style={{ width: "20%" }} />
            <Column field="startDate" header="Start Date" style={{ width: "20%" }} />
            <Column field="endDate" header="End Date" style={{ width: "20%" }} />
          </DataTable>
        </div>
      </div>

      
  
    </div>
  );
}
