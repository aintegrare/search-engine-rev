import HistoryContainer from './history-container'

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 hidden lg:flex">
      <HistoryContainer location="sidebar" />
      <div className="mt-4 flex flex-col gap-2">
        <a href="https://redeintegrare.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
          redeintegrare.com
        </a>
        <a href="https://redeintegrare.com.br" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
          redeintegrare.com.br
        </a>
      </div>
    </div>
  )
}
