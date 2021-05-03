export default setData => ({ label, value }) =>
  setData(data => ({
    ...data,
    [label]: value,
  }));
