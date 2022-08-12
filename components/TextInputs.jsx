const TextInputs = () => {
    const FormValues = [
        {
            id: 1,
            htmlFor: "name",
            label: "Name",
            input: {
                id: "name",
                type: "text"
            }
        },
        {
            id: 2,
            htmlFor: "gender",
            label: "Gender",
            input: {
                id: "gender",
                type: "text"
            }
        },
        {
            id: 3,
            htmlFor: "age",
            label: "Age",
            input: {
                id: "age",
                type: "text"
            }
        },
        {
            id: 4,
            htmlFor: "weight",
            label: "Weight",
            input: {
                id: "weight",
                type: "text"
            }
        },
        {
            id: 5,
            htmlFor: "breed",
            label: "Breed",
            input: {
                id: "breed",
                type: "text"
            }
        },
        {
            id: 6,
            htmlFor: "medications",
            label: "Medications",
            input: {
                id: "medications",
                type: "text"
            }
        },
        {
            id: 7,
            htmlFor: "allergens",
            label: "Allergens",
            input: {
                id: "allergens",
                type: "text"
            }
        },
    ]
    return (
        <>
            {
                FormValues.map((item) => (
                    <fieldset className="flex flex-col gap-y-2 border-none w-full">
                        <label htmlFor={item.htmlFor} className="text-lg">{item.label}</label>
                        <input id={item.input.id} className="border p-1 rounded-lg" type={item.input.type} />
                    </fieldset>
                ))
            }
        </>
    )
}

export default TextInputs