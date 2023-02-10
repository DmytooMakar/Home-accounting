import "./Sidebar.css"
export default function Sidebar(){
    let date = new Date;

    return (
        <section className="section-container">
            <div>
                <p className="date">{date.toLocaleDateString()}</p>
            </div>
        </section>
    )
}