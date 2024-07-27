function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
  /* kodlar buraya */
  const date = new Date();
  let year = date.getFullYear();
  const productfeature = {
    id: id,
    model: model,
    yakit: yakit,
    vites: vites,
    uretimYili: year - yas,
    fiyat: fiyat,
    kilometre: kilometre,
  };

  return productfeature;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getCarObject;
