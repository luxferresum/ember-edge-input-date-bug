import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    buildNativeElement() {
      const inputAttr = document.createElement('input');
      inputAttr.setAttribute('type', 'date');
      inputAttr.setAttribute('value', '2019-07-22');
      document.getElementById('placeholder-attr').appendChild(inputAttr);

      const inputProp = document.createElement('input');
      inputProp.setAttribute('type', 'date');
      inputProp.value = '2019-07-22';
      document.getElementById('placeholder-prop').appendChild(inputProp);
    }
  }
})
