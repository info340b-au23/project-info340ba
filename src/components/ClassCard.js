export function ClassCard({ majorName, entries }) {
    const classes = entries.map(({ name, desc }) => (
    <>
        <h4>{name}</h4>
        <p>{desc}</p>
    </>
))
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card m-2 hidden-card">
                    <div className="card-body">
                        <h3>{majorName}</h3>
                        {classes}
                    </div>
                </div>
            </div>
        </div>
    );
}