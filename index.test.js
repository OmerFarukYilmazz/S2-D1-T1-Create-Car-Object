const getCarObject = require('./index.js');
// const getCarObject = require('./solution.js');

describe('Araba Oluşturma Testleri', () => {
  const result = getCarObject(
    121,
    'VW Passat',
    'Benzin',
    'Otomatik',
    11,
    800000,
    153000
  );

  test('Fonksiyonun dönüş değeri nesne mi?', () => {
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
  });

  test("id key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('id');
  });
  test('Doğru id değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('id', 121);
  });
  test("model key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('model');
  });
  test('Doğru model değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('model', 'VW Passat');
  });

  test("yakit key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('yakit');
  });
  test('Doğru yakit değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('yakit', 'Benzin');
  });

  test("vites key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('vites');
  });
  test('Doğru vites değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('vites', 'Otomatik');
  });

  test("yas key'i dönen nesnede olmamalı, doğru mu?", () => {
    expect(result).not.toHaveProperty('yas');
  });

  test("uretimYili key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('uretimYili');
  });
  test('Doğru uretimYili değerini dönüyor mu?', () => {
    const now = new Date();
    const year = now.getFullYear();
    expect(result).toHaveProperty('uretimYili', year - 11);
  });

  test("fiyat key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('fiyat');
  });
  test('Doğru fiyat değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('fiyat', 800000);
  });

  test("kilometre key'i dönen nesnede var mı?", () => {
    expect(result).toHaveProperty('kilometre');
  });
  test('Doğru kilometre değerini dönüyor mu?', () => {
    expect(result).toHaveProperty('kilometre', 153000);
  });
});