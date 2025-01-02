import React from 'react'
import { useForm} from 'react-hook-form'

function ReactHookFormSyntax() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div>
            <form>
              <label>First Name</label>
               <input {...register("firstName")} />
            </form>
    </div>
  )
}

export default ReactHookFormSyntax;