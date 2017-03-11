import angular from 'angular';
import { algolia } from '../config/appConfig.json!';
import algoliasearch from 'algoliasearch/lite';

class AlgoliaService {

  /*@ngInject*/
  constructor($log) {
    this.$log = $log;
    this.client = algoliasearch(algolia.applicationId, algolia.apiKey);
    this.index = this.client.initIndex(algolia.index);
  }

  search(geoLocation) {
    var queries = [
      {
        indexName: algolia.index,
        params: {
          hitsPerPage: 6,
          aroundLatLngViaIP: true,
          getRankingInfo: true,
        },
      },
    ];

    return this.client.search(queries);
  }
}

export default angular
  .module('AlgoliaService', [])
  .service('algoliaService', AlgoliaService);
