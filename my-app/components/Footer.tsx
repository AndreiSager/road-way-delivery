type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = (
    <div>

    </div>
)

export default function Footer() {
    return(
        <footer>
            <div>
                <h1>Footer</h1>
                <p></p>
            </div>
            <div className="flex flex-row">
                <h1>Links</h1>
            </div>
            <div className="w-full justify-center items-center text-center">
                <h1>Copyright</h1>
            </div>
        </footer>
    )
}