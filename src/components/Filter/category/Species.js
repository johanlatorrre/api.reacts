import FilterBTN from "../FilterBTN";

const Species = ({ updateSpecies, updatePageNumber }) => {

    let species = [
        "Humanos",
        "Alienigenas",
        "Humanosid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animales extra",
        "Disease", "Robot",
        "Cronenbergs",
        "Planetas curiosos",
    ];


    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo"
                > especies vivas </button>
            </h2>
            <div
                id="collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map((item, index) => {
                        return (
                            <FilterBTN
                                name="species" index={index} key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateSpecies} input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Species;