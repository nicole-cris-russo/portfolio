const Container = ({ children, id }: { children: React.ReactNode; id?: string }) => {
    return (
        <section
            id={id}
            className="flex flex-1 flex-col gap-8 mx-auto"
        >
            {children}
        </section>
    )
}

export default Container
