const validarTodoLLeno = (campos) => {
  return campos.some((campo) => campo === "");
};


export { validarTodoLLeno };
