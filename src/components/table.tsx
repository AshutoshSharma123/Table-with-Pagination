import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import "primereact/resources/primereact.min.css";




export default function PaginatorBasicDemo() {
type Artwork = {
  id: number;
  title: string;
  place: string;
  artist: string;
  startDate: number;
  endDate: number;
};

const op = useRef<OverlayPanel | null>(null);

const [artworks, setArtworks] = useState<Artwork[]>([]);



const [selectedCustomers, setSelectedCustomers] = useState<Artwork[]>([]);
  const [visible, setVisible] = useState(false);

  



  const [first, setFirst] = useState(0);
const [rows, setRows] = useState(12);
const [total, setTotal] = useState(0);
const [loading, setLoading] = useState(false);




const [rowNumber, setrowNumber] = useState(0)
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleOverlay = (event:any) => {
  
if (visible) {
  op.current?.hide();
  setVisible(false);
} else {
  op.current?.show(event);
  setVisible(true);
}

    
  };
  


  const fetchInfo = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
      const data = await response.json();

      const simplifiedData = data.data.map((item:any) => ({
        id: item.id,
        title: item.title,
        place: item.place_of_origin,
        artist: item.artist_title,
        startDate: item.date_start,
        endDate: item.date_end,
      }));

      setArtworks(simplifiedData);
      setTotal(data.pagination.total);



          console.log(`${page} fetched successfully.`);
    console.log(` Number of rows fetched this time: ${simplifiedData.length}`);


 if (rowNumber > selectedCount) {
      const remaining = rowNumber - selectedCount;
      const toSelect = simplifiedData.slice(0, remaining);
      const newSelection = [...selectedCustomers, ...toSelect];
      setSelectedCustomers(newSelection);
      setSelectedCount(newSelection.length);
      console.log(`Auto-selected ${toSelect.length} more rows`);}



    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchInfo(1);
  }, []);



  const onPage = (event:any) => {
    const newPage = event.page + 1; // API starts at 1
    setFirst(event.first);
    setRows(event.rows);
    fetchInfo(newPage);
    console.log('new page fetched ->',newPage);
  };

  const handleSelect = () => {
    if (rowNumber <= 0) return;
    const toSelect = artworks.slice(0, rowNumber);
    setSelectedCustomers(toSelect);
    setSelectedCount(toSelect.length);
    console.log(`Manually selected ${toSelect.length} rows`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">



          <OverlayPanel ref={op} onHide={() => setVisible(false)}>
        <div className="p-3 text-sm text-gray-700">
          <input type="number"
          
             value={rowNumber}
            onChange={(e) => setrowNumber(Number(e.target.value))}
            placeholder="Enter number of rows"
            className="border border-gray-300 rounded-md p-1 w-36"
          />
          <button onClick={handleSelect} className="ml-2 bg-blue-500 text-white rounded-md px-2 py-1">Select</button>
        </div>

      </OverlayPanel>
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <div className="overflow-hidden rounded-xl border border-gray-300">
          <DataTable
            value={artworks}
            paginator
            lazy
            rows={rows}
            totalRecords={total}
            first={first}
            loading={loading}
            onPage={onPage}
            selectionMode="checkbox"
            selection={selectedCustomers}
            onSelectionChange={(e) => setSelectedCustomers(e.value)}
            stripedRows
            className="w-full text-gray-800"
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
