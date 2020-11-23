(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.regexIndexOf null string should return -1', () => {
      const res = nx.regexIndexOf(null, /xx/);
      expect(res).toBe(-1);
    });

    test('nx.regexIndexOf search /[\u4e00-\u9fa5]/', () => {
      const str = `What's this? 这是什么？`;
      const res = nx.regexIndexOf(str, /[\u4e00-\u9fa5]/);
      expect(res).toBe(13);
    });
  });
})();
