export default function Youtube() {
    return (
        <>
              <div className="w-full flex flex-col items-center justify-center py-10 gap-y-6">
                <div className="six-title font-manrope font-bold tracking-tight main-gradient">App Showcase</div>
                <iframe width="560" height="615" className="w-2/3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]" src="https://www.youtube.com/embed/dIBZX0nQH2c?si=YteDKU6erDzlGkJV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </>
    )
}