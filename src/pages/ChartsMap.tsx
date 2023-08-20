import Sidebar from "../components/Sidebar";

function ChartsMap() {
    return (
      <>
        <header className='bg-blue-800 h-16 text-center py-5 font-mono font-bold text-white text-2xl'>ChartsMap Page</header>
        <div className="flex flex-col lg:flex-row">
            <Sidebar className={'bg-white'} />
            <div className="flex-1 bg-gray-100 p-4">Chart Here</div>
        </div>
      </>
    );
}
  
export default ChartsMap;