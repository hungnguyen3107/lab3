"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _eu_ES = _interopRequireDefault(require("rc-pagination/lib/locale/eu_ES"));
var _eu_ES2 = _interopRequireDefault(require("../calendar/locale/eu_ES"));
var _eu_ES3 = _interopRequireDefault(require("../date-picker/locale/eu_ES"));
var _eu_ES4 = _interopRequireDefault(require("../time-picker/locale/eu_ES"));
/* eslint-disable no-template-curly-in-string */

const typeTemplate = '${label} ez da ${type} balioduna';
const localeValues = {
  locale: 'eu',
  Pagination: _eu_ES.default,
  DatePicker: _eu_ES3.default,
  TimePicker: _eu_ES4.default,
  Calendar: _eu_ES2.default,
  global: {
    placeholder: 'Aukeratu'
  },
  Table: {
    filterTitle: 'Iragazi menua',
    filterConfirm: 'Onartu',
    filterReset: 'Berrasi',
    filterEmptyText: 'Iragazkirik gabe',
    filterCheckall: 'Autatu dena',
    filterSearchPlaceholder: 'Bilatu iragazkietan',
    emptyText: 'Daturik gabe',
    selectAll: 'Autatu dena',
    selectInvert: 'Alderantzikatu hautaketa',
    selectNone: 'Hustu dena',
    selectionAll: 'Autatu datu guztiak',
    sortTitle: 'Ordenatu',
    expand: 'Zabaldu ilera',
    collapse: 'Ilera kolapsatu',
    triggerDesc: 'Klik beheranzko ordenan ordenatzeko',
    triggerAsc: 'Klik goranzko ordenan ordenatzeko',
    cancelSort: 'Egin klik ordenamendua ezeztatzeko'
  },
  Modal: {
    okText: 'Onartu',
    cancelText: 'Ezeztatu',
    justOkText: 'Onartu'
  },
  Popconfirm: {
    okText: 'Onartu',
    cancelText: 'Ezeztatu'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Bilatu hemen',
    itemUnit: 'Elementu',
    itemsUnit: 'Elementuak',
    remove: 'Ezabatu',
    selectCurrent: 'Hautatu uneko orria',
    removeCurrent: 'Uneko orria ezabatu',
    selectAll: 'Datu guztiak hautatu',
    removeAll: 'Ezabatu datu guztiak',
    selectInvert: 'Uneko orrialdea alderantzikatu'
  },
  Upload: {
    uploading: 'Eguneratzen...',
    removeFile: 'Fitxategi ezabatu',
    uploadError: 'Errore bat gertate da fitxategia igotzerakoan',
    previewFile: 'Aurrebista',
    downloadFile: 'Fitxategia deskargatu'
  },
  Empty: {
    description: 'Ez dago daturik'
  },
  Icon: {
    icon: 'ikono'
  },
  Text: {
    edit: 'Editatu',
    copy: 'Kopiatu',
    copied: 'Kopiatuta',
    expand: 'Zabaldu'
  },
  PageHeader: {
    back: 'Itzuli'
  },
  Form: {
    optional: '(aukerakoa)',
    defaultValidateMessages: {
      default: '${label} eremuaren balidazio errore',
      required: 'Mesedez, sartu ${label}',
      enum: '${label} [${enum}] -tako bat izan behar da',
      whitespace: '${label} ezin da izan karaktere zuri bat',
      date: {
        format: '${label} dataren formatua baliogabea da',
        parse: '${label} ezin da data batera deitu',
        invalid: '${label} data baliogabea da'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} ${len} karaktere izan dehar ditu',
        min: '${label} gutxienez ${min} karaktere izan behar ditu',
        max: '${label} gehienez ${max} karaktere izan behar ditu',
        range: '${label} ${min}-${max} karaktere artean izan behar ditu'
      },
      number: {
        len: '${label} -ren balioa ${len} izan behar da',
        min: '${label} -ren balio minimoa ${min} da',
        max: '${label} -ren balio maximoa ${max} da',
        range: '${label} -ren balioa ${min}-${max} -ren artean izan behar da'
      },
      array: {
        len: '${len} ${label} izan behar du',
        min: 'Gutxienez ${min} ${label}',
        max: 'Gehienez ${max} ${label}',
        range: '${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du'
      },
      pattern: {
        mismatch: '${label} ez dator bat ${pattern} patroiarekin'
      }
    }
  },
  Image: {
    preview: 'Arruebista'
  }
};
var _default = exports.default = localeValues;