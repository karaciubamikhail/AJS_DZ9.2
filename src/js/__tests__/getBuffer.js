import getBuffer from '../getBuffer';

test('testing whether function can actualy to emul buffer', () => {
  const buffer = getBuffer();
  expect(buffer).toBeInstanceOf(ArrayBuffer);
});

// так себе проверочка, но ничего другого я не придумал.
