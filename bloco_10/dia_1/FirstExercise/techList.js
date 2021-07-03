const techList = (list, name) => {
  if(list.length === 0) return 'Vazio!';

  const listTech = list
  .sort()
  .map((tech) => ({
    tech: tech,
    name, 
  }));
  return listTech;
};
module.exports = techList