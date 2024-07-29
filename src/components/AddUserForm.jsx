import { PropTypes } from "prop-types"
import { useForm } from "react-hook-form"

export default function AddUserForm(
  { addUser }
  ) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    addUser(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input 
        type="text" 
        {...register("name", {
          required: {
            value: true, 
            message: "Campo requerido"
          },
          minLength: {
            value: 2, 
            message: "Mínimo 2 caracteres"
          }
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label>Username</label>
      <input 
        type="text" 
        {...register("username", {
          required: {
            value: true, 
            message: "Campo requerido"
          },
          minLength: {
            value: 2, 
            message: "Mínimo 2 caracteres"
          }
        })}
      />
      {errors.username && <span>{errors.username.message}</span>}
      <button>Add new user</button>
    </form>
  )
}

AddUserForm.propTypes = {
  addUser: PropTypes.func
}