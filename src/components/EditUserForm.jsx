import { PropTypes } from "prop-types"
import { useEffect } from "react";
import { useForm } from "react-hook-form"

export default function EditUserForm({ currentUser, updateUser }
  // { currentUser, updateUser }
  ) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues: currentUser,
  });

  useEffect(() => {
    setValue('name', currentUser.name);
  }, [currentUser, setValue])
  useEffect(() => {
    setValue('username', currentUser.username);
  }, [currentUser, setValue])
  
  
  const onSubmit = handleSubmit((data) => {
    data.id = currentUser.id;
    updateUser(currentUser.id, data);
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
      <button>Edit user</button>
    </form>
  )
}

EditUserForm.propTypes = {
  currentUser: PropTypes.object,
  updateUser: PropTypes.func
}