import { useForm } from "react-hook-form";

export default function DropdownPractice() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const isChecked = watch("checkbox", false); // Default checkbox state is false;
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
            {/* Register an input field */}
            <label htmlFor="example" className="block text-sm font-medium text-gray-700">
                Example Input:
            </label>
            <input
                id="example"
                defaultValue="test"
                {...register("example")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

            {/* Required input field with error handling */}
            <label htmlFor="exampleRequired" className="block mt-4 text-sm font-medium text-gray-700">
                Required Input:
            </label>
            <input
                id="exampleRequired"
                {...register("exampleRequired", { required: "This field is required" })}
                placeholder="Enter something..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.exampleRequired && <span className="text-sm text-red-500">{errors.exampleRequired.message}</span>}

            {/* Checkbox with corrected register */}
            <label className="block mt-4">
                <input type="checkbox" {...register("checkbox")} className="mr-2" />
                <span>Agree to terms and conditions</span>
            </label>

            {/* Submit button is disabled unless checkbox is checked */}
            <div className="mt-4">
                <button
                    type="submit"
                    className={`border px-4 py-2 text-white rounded-md transition ${isChecked ? "bg-blue-800 hover:bg-blue-900" : "bg-blue-300 cursor-not-allowed"
                        }`}
                    disabled={!isChecked}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
