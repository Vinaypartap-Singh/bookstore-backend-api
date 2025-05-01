'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bookstore documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' :
                                            'id="xs-controllers-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' :
                                        'id="xs-injectables-links-module-AppModule-2108322ae924da4fde46030a1a6cd068363f8d041cb72437e2f9e4d0a8d6aabbf89ad1306e50c944a459fe59b4e13a5140d91877990ddaf77fd36f82ddc8d127"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookstoreModule.html" data-type="entity-link" >BookstoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' : 'data-bs-target="#xs-controllers-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' :
                                            'id="xs-controllers-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' }>
                                            <li class="link">
                                                <a href="controllers/BookstoreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookstoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' : 'data-bs-target="#xs-injectables-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' :
                                        'id="xs-injectables-links-module-BookstoreModule-cdde0a7610d8344ad28f5b2c4eab6c389cd0a13a0c02aa744d4c23714b2d692cac4c12ee74d0bd7a1faae2257f7f42d74b014269236a0f7485a670015b489e61"' }>
                                        <li class="link">
                                            <a href="injectables/BookstoreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookstoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' :
                                        'id="xs-injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Bookstore.html" data-type="entity-link" >Bookstore</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookstoreDto.html" data-type="entity-link" >UpdateBookstoreDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});