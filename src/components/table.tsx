import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import "primereact/resources/primereact.min.css";



export default function PaginatorBasicDemo() {

  const [artworks, setArtworks] = useState([]);        


  const op = useRef(null); 
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [visible, setVisible] = useState(false);

  

  const toggleOverlay = (event) => {
  
    if(visible){
      op.current.hide();
      setVisible(false);
    }
    else{
      op.current.show(event);
      setVisible(true);
    }
    
  };
  

    useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=1`);
        const data = await response.json();
        console.log('data while fetching->' , [data.data]);
 
  const simplifiedData = data.data.map((item) => ({
  id: item.id,
  title: item.title,
  place: item.place_of_origin,
  artist: item.artist_title,
  startDate: item.date_start,
  endDate: item.date_end,
}));  

 setArtworks(simplifiedData);
  console.log("Data->", simplifiedData);
}  catch (error) {
  console.log("Error fetching artworks:", error);
}
      }

    fetchInfo();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">



          <OverlayPanel ref={op} onHide={() => setVisible(false)}>
        <div className="p-3 text-sm text-gray-700">
          <input type="number" placeholder="enter number of rows to be selected" className="border border-gray-300 rounded-md p-1" />
          <button className="ml-2 bg-blue-500 text-white rounded-md px-2 py-1">Select</button>
        </div>

      </OverlayPanel>
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <div className="overflow-hidden rounded-xl border border-gray-300">
          <DataTable
            value={artworks}
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
className="w-[1rem]"
            />

            <Column 
              header={
                <div
                  onClick={toggleOverlay}
                  className="flex items-center w-[0.3rem] justify-center  cursor-pointer select-none group"
                  
                >
             <span
  className={`text-sm transition-transform duration-300 ${
    visible
      ? "rotate-180 text-gray-900"
      : "rotate-0 text-gray-500"
  }`}
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 224.008 224.008"
  className={`w-3 h-3 transition-transform duration-300 ${
    visible ? "rotate-180 fill-gray-900" : "rotate-0 fill-gray-500"
  }`}
>
  <path d="M197.299 7.933l-85.5 171-84.9-171c-8.4-16.8-33.6-4.2-25.2 12.6l97.5 195.6c5.3 10.5 20 10.5 25.2 0l98-195.6c1.1-1.6 1.6-4.2 1.6-6.3 0-9.4-20.4-14.1-26.7-0.9z" />
</svg>

</span>
                </div>
              } className="w-1" />
            <Column field="title" header="Title"      className="w-[3rem]"/>
            <Column field="place" header="Place of Origin"      className="w-[3rem]"/>
            <Column field="artist" header="Artist"     className="w-[3rem]" />
            <Column field="startDate" header="Start Date"      className="w-[3rem]"/>
            <Column field="endDate" header="End Date"      className="w-[3rem]"/>
          </DataTable>
        </div>
      </div>

      
  
    </div>
  );
}
