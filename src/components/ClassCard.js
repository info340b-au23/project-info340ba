export function ClassCard({ majorName, entries }) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card m-2 hidden-card">
                    <div className="card-body">
                        <h3>{majorName}</h3>
                        {entries.map(({ name, desc }) =>
                            <>
                                <h4>{name}</h4>
                                <p>{desc}</p>
                            </>
                        )}
                        {/* <h4>INFO 200</h4>
                        <p>Introductory Intellectual Foundations of Informatics</p>
                        <h4>INFO 201</h4>
                        <p>Introductory Foundational Skills of Informatics</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}