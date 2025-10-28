import './index.css';

function App() {
  return (
    <>
      <div>
        {/* lg:flex-row: a partir dos 1024px, o flex muda de col para row */}
        <div className="w-full flex gap-3 items-center flex-col lg:flex-row justify-center">
          <div className="bg-red-700 w-32 h-32 md:w-64 md:h-64 xs:bg-amber-950"></div>
          <div className="bg-green-700 w-32 h-32 md:w-64 md:h-64 xl:bg-amber-950"></div>
          <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64"></div>
          
        </div>
      </div>
      <div class="bg-[--color-primary] text-[--color-text] font-[--font-graphik]">
        Teste de Tailwind 4
      </div>
    </>
  )
}

export default App
