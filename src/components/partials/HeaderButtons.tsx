export default function HeaderButtons() {
    return (
        <div className="bg-linear-to-r from-brand-blue-800 to-brand-blue-100 border-b-2 border-zinc-200 p-4 flex items-center justify-end gap-2 cursor-default select-none">
            {['/img/minimize.svg', '/img/maximize.svg', '/img/close.svg'].map((icon) => (
                <div className="bg-brand-gray p-1 aspect-square shadow-personalized">
                    <img
                        src={icon}
                        alt="Minimize"
                        className="h-3"
                    />
                </div>
            ))}
        </div>
    )
}
