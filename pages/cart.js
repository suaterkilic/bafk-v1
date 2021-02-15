import React, { Fragment } from "react";
import Layout from "../components/layout";
import SearchIcon from "../components/header/SearchIcon";
import Link from 'next/link'
const Cart = () => {
  return (
    <Fragment>
      <div className="page-template-default page page-id-1706 wp-embed-responsive theme-barberry woocommerce-cart woocommerce-page woocommerce-js wpb-js-composer js-comp-ver-6.3.0 vc_responsive load-transition no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax bb_classic_notif tag-cloud-default">
        <SearchIcon />

        <div id="bb-container" className="bb-container">
          <header className="site-header header-default header-color-default header-has-bg">
            {/* begin header-inner */}
            <div className="header-inner">
              {/* begin header-wrapper */}
              <div className="header-wrapper grid-container">
                {/* begin header-sections */}
                <div
                  className="header-sections grid-x align-middle"
                  style={{ opacity: 1, visibility: "inherit" }}
                >
                  {/* begin left-nav */}
                  <div className="left-nav barberry-navigation cell auto">
                    <nav className="navigation-foundation">
                      <ul
                        id="menu-primary-menu"
                        className="dropdown menu"
                        data-dropdown-menu
                        data-hover-delay={150}
                        data-closing-time={0}
                        role="menubar"
                        data-n="1eyswe-n"
                      >
                        <li
                          id="menu-item-3609"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3609"
                          role="menuitem"
                        >
                          <Link href="/">
                            <a>
                              <span>Ana Sayfa</span>
                            </a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-3680"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680"
                          role="menuitem"
                        >
                          <a href="../hakkimizda/index.html">
                            <span>Biz Kimiz</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-3497"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 dropdown is-dropdown-submenu-parent is-mega-menu opens-right with-offsets"
                          role="menuitem"
                          aria-haspopup="true"
                          aria-label="Erkek"
                        >
                          <Link href="/category">
                            <a
                              className="dropdown-toggle"
                            >
                              <span>Erkek</span>
                            </a>
                          </Link>
                          <ul
                            className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                            data-submenu
                            role="menubar"
                            style={{}}
                          >
                            <li
                              role="menuitem"
                              className="is-submenu-item is-dropdown-submenu-item"
                            >
                              <div
                                style={{
                                  backgroundImage:
                                    "url(http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg)",
                                  backgroundPosition: "right top",
                                  backgroundRepeat: "no-repeat",
                                  backgroundAttachment: "scroll",
                                  backgroundColor: "",
                                  width: "1000px",
                                }}
                                className="mega-menu-content"
                              >
                                <div className="grid-x">
                                  <div
                                    id="menu-item-4028"
                                    className="cell medium-3"
                                  >
                                    <div className="menu-item-mega">
                                      <a href="../erkek-esofmanlari/index.html">
                                        Eşofman
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="menu-item-4052"
                                    className="cell medium-3"
                                  >
                                    <div className="menu-item-mega">
                                      <a href="../erkek-sortlari/index.html">
                                        Şort
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3616"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"
                          role="menuitem"
                        >
                          <a href="../blog/index.html">
                            <span>Blog</span>
                          </a>
                        </li>
                      </ul>
                      <div className="menu-trigger grid-x align-middle">
                        <div className="nav_burger cell shrink">
                          <span className="burger_top" />
                          <span className="burger_middle" />
                          <span className="burger_bottom" />
                        </div>
                        <div className="menu-title cell auto">
                          <span>Menu</span>
                        </div>
                      </div>
                    </nav>
                  </div>
                  {/* end left-nav */}
                  {/* begin site-branding */}
                  <div className="site-branding cell shrink text-center">
                    <Link href="/">
                      <a rel="home">
                        <img
                          className="site-logo"
                          src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                          title="The Original"
                          alt="BAFK"
                        />
                        <img
                          className="site-logo-light"
                          src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                          title="The Original"
                          alt="BAFK"
                        />
                        <img
                          className="sticky-logo"
                          src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                          title="The Original"
                          alt="BAFK"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* end site-branding */}
                  {/* begin tools */}
                  <div className="tools cell auto text-right">
                    {/* begin header-expanded-view */}
                    <div className="header-expanded-view">
                      <div className="header-expanded-view-inner">
                        <span id="header-search" className="header-search">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-search" />
                          </svg>
                        </span>{" "}
                        <a
                          href="../favorilerim/index.html"
                          className="header-wishlist"
                        >
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-wishlist" />
                          </svg>
                          <sup className="wishlist_items_number">0</sup>
                        </a>{" "}
                        <div className="header-account navigation-foundation">
                          <ul
                            className="dropdown menu my-account-form  my-account-has-drop "
                            data-close-on-click="false"
                            data-close-on-click-inside="false"
                            data-click-open="false"
                            data-dropdown-menu
                            data-hover-delay={150}
                            data-closing-time={0}
                            data-alignment="right"
                            role="menubar"
                            data-n="yjen81-n"
                          >
                            <li role="menuitem">
                              <a
                                data-open="head_loginModal"
                                aria-controls="head_loginModal"
                                aria-haspopup="true"
                                tabIndex={0}
                              >
                                <span>Hesabım</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* end header-expanded-view */}
                    <a href="index.html" className="link header-cart ">
                      <span className="header-cart-title">Sepet</span>
                      <span className="header-cart-count">
                        <span className="header-cart-count-background" />
                        <span className="header-cart-count-number">0</span>
                      </span>
                    </a>
                  </div>
                  {/* end tools */}
                </div>
                {/* end header-sections */}
              </div>
              {/* end header-wrapper */}
            </div>
            {/* end header-inner */}
          </header>
          {/* begin offcanvas_container */}
          <div className="offcanvas_container">
            {/* begin offcanvas_main_content */}
            <div className="offcanvas_main_content">
              {/* begin page-header */}
              <div
                className="page-header page-title-default title-size-default title-design-default color-scheme-dark"
                style={{}}
              >
                {/* begin title-section */}
                <div
                  className="title-section grid-container"
                  data-parallax='{"y" : -40, "smoothness": 10}'
                >
                  {/* begin title-section-wrapper */}
                  <div className="title-section-wrapper grid-x align-middle align-center">
                    {/* begin page-title-wrapper */}
                    <div className="title-wrapper">
                      <div className="breadcrumbs-wrapper">
                        <div
                          className="breadcrumbs"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <span>
                            <a
                              href="../index.html"
                              rel="v:url"
                              property="v:title"
                            >
                              Home
                            </a>
                          </span>
                          <span className="delimiter">/</span>
                          <span className="current">Sepet</span>
                        </div>
                        {/* .breadcrumbs */}
                      </div>
                      {/* .breadcrumbs-wrapper */}
                      {/* begin page-title-wrapper */}
                      <div className="page-title-wrapper">
                        <h1
                          className="page-title entry-title"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Sepet{" "}
                        </h1>
                      </div>
                      {/* end .page-title-wrapper */}
                      <div
                        className="term-description"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <p>Tüm Ürünlerde Kargo BEDAVA</p>
                      </div>
                    </div>
                    {/* end .title-wrapper */}
                  </div>
                  {/* end .title-section-wrapper */}
                </div>
                {/* end .title-section */}
                {/* begin page-title-wrapper */}
                <div className="page-header-bg-wrapper bg-loaded">
                  <div
                    className="page-header-bg rellax"
                    data-rellax-speed="-1.5"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  />
                </div>
                {/* end .page-title-wrapper */}
              </div>
              {/* end .page-header */}
              {/* begin content-area */}
              <div
                id="primary"
                className="default-width-page content-area"
                style={{
                  marginBottom: "451.188px",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                {/* begin site-content */}
                <div id="content" className="site-content" role="main">
                  {/* begin grid-container */}
                  <div className="grid-container content-page-wrapper">
                    {/* begin grid-x */}
                    <div className="grid-x grid-margin-x">
                      {/* begin cell */}
                      <div className="cell large-12">
                        <article
                          id="post-1706"
                          className="post-1706 page type-page status-publish hentry"
                        >
                          <div className="entry-content">
                            <div className="woocommerce">
                              {/* begin grid-x */}
                              <div className="grid-x cart-cells cart-cells-empty">
                                {/* begin cart-intro */}
                                <div className="cart-intro cell large-3">
                                  {/* begin page-title-wrapper */}
                                  <div className="title-wrapper">
                                    {/* begin page-title-wrapper */}
                                    <div className="page-title-wrapper">
                                      <h1
                                        className="page-title entry-title"
                                        style={{
                                          opacity: 1,
                                          visibility: "inherit",
                                          transform: "translate(0px, 0px)",
                                        }}
                                      >
                                        Sepet
                                      </h1>
                                    </div>
                                    {/* end .page-title-wrapper */}
                                    <div
                                      className="term-description"
                                      style={{
                                        opacity: 1,
                                        visibility: "inherit",
                                        transform: "translate(0px, 0px)",
                                      }}
                                    >
                                      <p>Tüm Ürünlerde Kargo BEDAVA</p>
                                    </div>
                                  </div>
                                  {/* end .title-wrapper */}
                                  <a
                                    className="continue-shopping"
                                    href="../magaza/index.html"
                                  >
                                    Alışverişe devam et
                                  </a>
                                </div>
                                {/* end cart-intro */}
                                {/* begin cart-items */}
                                <div
                                  id="cart-items"
                                  className="cart-items cell medium-7 large-5"
                                >
                                  <div className="woocommerce-notices-wrapper" />{" "}
                                  {/* begin page-title-wrapper */}
                                  <div className="title-wrapper">
                                    {/* begin page-title-wrapper */}
                                    <div className="page-title-wrapper">
                                      <h1
                                        className="page-title entry-title"
                                        style={{
                                          opacity: 1,
                                          visibility: "inherit",
                                          transform: "translate(0px, 0px)",
                                        }}
                                      >
                                        Sepet{" "}
                                      </h1>
                                    </div>
                                    {/* end .page-title-wrapper */}
                                    <div
                                      className="term-description"
                                      style={{
                                        opacity: 1,
                                        visibility: "inherit",
                                        transform: "translate(0px, 0px)",
                                      }}
                                    >
                                      <p>Tüm Ürünlerde Kargo BEDAVA</p>
                                    </div>
                                  </div>
                                  {/* end .title-wrapper */}
                                  <div
                                    id="cart-form"
                                    className="woocommerce-cart-form cart-empty-section"
                                  >
                                    <p className="cart-empty-text">
                                      Sepetiniz şu anda boş.
                                    </p>
                                    <p className="return-to-shop">
                                      <a
                                        className="button btn--border wc-backward"
                                        href="../magaza/index.html"
                                      >
                                        Mağazaya geri dön{" "}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                {/* end cart-items */}
                                {/* begin cart-totals */}
                                <div className="cart-totals cell medium-5 large-4">
                                  <div className="cart-collaterals">
                                    <div className="cart_totals ">
                                      <h2>Sepet toplamları</h2>
                                      <table
                                        cellSpacing={0}
                                        className="shop_table shop_table_responsive"
                                      >
                                        <tbody>
                                          <tr className="cart-empty-tr">
                                            <td colSpan={2}>
                                              Sepetiniz şu anda boş.
                                            </td>
                                          </tr>
                                          <tr className="order-total">
                                            <th>Toplam</th>
                                            <td data-title="Toplam">
                                              <strong>
                                                <span className="amount">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">
                                                        ₺
                                                      </span>
                                                      0<sup>,00</sup>
                                                    </bdi>
                                                  </span>
                                                </span>
                                              </strong>{" "}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                {/* end cart-totals */}
                              </div>
                              {/* end grid-x */}
                            </div>
                          </div>
                          {/* .entry-content */}
                        </article>
                        {/* #post */}
                      </div>
                      {/* end cell large-12 */}
                    </div>
                    {/* end grid-x */}
                  </div>
                  {/* end grid-container */}
                </div>
                {/* end site-content */}
                <div className="prefooter" />
              </div>
              {/* end content-area */}
              <footer
                id="site-footer"
                data-footer-copy={1}
                style={{ opacity: 1, visibility: "inherit" }}
              >
                {/* begin grid-container */}
                <div className="grid-container">
                  <div
                    className="site-footer-inner"
                    data-sr-id={0}
                    style={{ visibility: "visible" }}
                  >
                    <div className="widget-area">
                      <div className="grid-x grid-padding-x small-up-1 large-up-4">
                        <div className="cell text-left">
                          <aside
                            id="nav_menu-3"
                            className="widget widget_nav_menu"
                          >
                            <h4 className="widget-title">BAFK</h4>
                            <div className="menu-footer-hakkimizda-container">
                              <ul id="menu-footer-hakkimizda" className="menu">
                                <li
                                  id="menu-item-4032"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4032"
                                >
                                  <a href="../sikca-sorulan-sorular/index.html">
                                    Sıkça Sorulan Sorular
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4033"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4033"
                                >
                                  <a href="../hakkimizda/index.html">
                                    Hakkımızda
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4035"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4035"
                                >
                                  <a href="../blog/index.html">Blog</a>
                                </li>
                                <li
                                  id="menu-item-4034"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034"
                                >
                                  <a href="../iletisim/index.html">İletişim</a>
                                </li>
                              </ul>
                            </div>
                          </aside>
                        </div>
                        <div className="cell text-left">
                          <aside
                            id="nav_menu-4"
                            className="widget widget_nav_menu"
                          >
                            <h4 className="widget-title">Kullanıcı</h4>
                            <div className="menu-footer-hesabim-container">
                              <ul id="menu-footer-hesabim" className="menu">
                                <li
                                  id="menu-item-4036"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4036"
                                >
                                  <a href="../siparis-takibi/index.html">
                                    Sipariş Takibi
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4039"
                                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1706 current_page_item menu-item-4039"
                                >
                                  <a href="index.html" aria-current="page">
                                    Sepet
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4038"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4038"
                                >
                                  <a href="../odeme/index.html">Ödeme</a>
                                </li>
                                <li
                                  id="menu-item-4037"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4037"
                                >
                                  <a href="../hesabim/index.html">Hesabım</a>
                                </li>
                              </ul>
                            </div>
                          </aside>
                        </div>
                        <div className="cell text-left">
                          <aside
                            id="nav_menu-2"
                            className="widget widget_nav_menu"
                          >
                            <h4 className="widget-title">Sözleşmeler</h4>
                            <div className="menu-footer-sozlesmeler-container">
                              <ul id="menu-footer-sozlesmeler" className="menu">
                                <li
                                  id="menu-item-3504"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-3504"
                                >
                                  <a href="../mesafeli-satis-sozlesmesi/index.html">
                                    Mesafeli Satış Sözleşmesi
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4030"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4030"
                                >
                                  <a href="../gizlilik-sozlesmesi/index.html">
                                    Gizlilik Sözleşmesi
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4029"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4029"
                                >
                                  <a href="../uyelik-sozlesmesi/index.html">
                                    Üyelik Sözleşmesi
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4031"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4031"
                                >
                                  <a href="../kisisel-verilerin-korunmasi/index.html">
                                    Kişisel Verilerin Korunması
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </aside>
                        </div>
                        <div className="cell text-right">
                          <aside id="text-1" className="widget widget_text">
                            <h4 className="widget-title">BAFK The Original</h4>{" "}
                            <div className="textwidget">
                              <p>
                                Dünyaca ünlü tasarımcıların imzasını taşıyan
                                sıra dışı sokak modası.
                              </p>
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                    {/* begin copyright-section */}
                    <div className="copyright-section">
                      {/* begin grid-x */}
                      <div className="grid-x grid-padding-x">
                        {/* begin cell */}
                        <div className="cell large-4">
                          <ul className="social-icons">
                            <li className="facebook">
                              <a target="_blank" title="Facebook" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-facebook" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a target="_blank" title="Twitter" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-twitter" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a target="_blank" title="Pinterest" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-pinterest" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="googleplus">
                              <a target="_blank" title="Google Plus" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-googleplus" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* end cell */}
                        {/* begin cell */}
                        <div className="cell large-4 footer_text">
                          <strong>BAFK</strong> Tüm Hakları Gizlidir.{" "}
                        </div>
                        {/* end cell */}
                        {/* begin cell */}
                        <div className="cell large-4 footer-payment">
                          <div className="footer-credit-card-icons">
                            <img
                              src="../wp-content/uploads/2018/12/payment-icon-visa.png"
                              alt="Visa"
                              title="Visa"
                            />
                            <img
                              src="../wp-content/uploads/2018/12/payment-icon-mastercard.png"
                              alt="MasterCard"
                              title="MasterCard"
                            />
                            <img
                              src="../wp-content/uploads/2018/12/payment-icon-amex.png"
                              alt="Amex"
                              title="Amex"
                            />
                            <img
                              src="../wp-content/uploads/2018/12/payment-icon-paypal.png"
                              alt="PayPal"
                              title="PayPal"
                            />
                            <img
                              src="../wp-content/uploads/2018/12/payment-icon-amazon.png"
                              alt="Amazon"
                              title="Amazon"
                            />{" "}
                          </div>
                        </div>
                        {/* end cell */}
                      </div>
                      {/* end grid-x */}
                    </div>
                    {/* end copyright-section */}
                  </div>
                </div>
                {/* end grid-container */}
                <div className="footer__wrapper" />
              </footer>
            </div>
            {/* end offcanvas_main_content */}
            {/* Off-Canvas Aside Content Left */}
            <div className="offcanvas_aside offcanvas_aside_left">
              <div className="nano">
                <div className="nano-content">
                  <div className="offcanvas_aside_content">
                    <div className="offcanvas_mainmenu">
                      <div className="close-icon">
                        <span className="close-icon_top" />
                        <span className="close-icon_bottom" />
                      </div>
                      {/* begin offcanvas-navs */}
                      <div className="offcanvas-navs">
                        <div className="header-mobiles-primary-menu">
                          <div
                            className="is-drilldown animate-height"
                            style={{ height: "174.167px", maxWidth: "500px" }}
                          >
                            <ul
                              id="menu-primary-menu-1"
                              className="vertical menu drilldown mobile-menu"
                              data-drilldown
                              data-close-on-click="true"
                              data-auto-height="true"
                              data-animate-height="true"
                              data-parent-link="true"
                              data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                              role="tree"
                              aria-multiselectable="false"
                              data-mutate="j28iek-drilldown"
                              data-n="5pm451-n"
                            >
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3609"
                                role="treeitem"
                              >
                                <a href="../index.html">
                                  <span>Ana Sayfa</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680"
                                role="treeitem"
                              >
                                <a href="../hakkimizda/index.html">
                                  <span>Biz Kimiz</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 is-drilldown-submenu-parent"
                                role="treeitem"
                                aria-haspopup="true"
                                aria-label="Erkek"
                                aria-expanded="false"
                              >
                                <a tabIndex={0}>
                                  <span>Erkek</span>
                                </a>
                                <ul
                                  className="menu vertical nested submenu is-drilldown-submenu invisible"
                                  data-submenu
                                  role="group"
                                  aria-hidden="true"
                                >
                                  <li className="js-drilldown-back">
                                    <a tabIndex={0}>Back</a>
                                  </li>
                                  <li
                                    data-is-parent-link
                                    className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                    role="menuitem"
                                  >
                                    <a href="../magaza/index.html">
                                      <span>Erkek</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="../erkek-esofmanlari/index.html">
                                      <span>Eşofman</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4052 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="../erkek-sortlari/index.html">
                                      <span>Şort</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"
                                role="treeitem"
                              >
                                <a href="../blog/index.html">
                                  <span>Blog</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="header-mobiles-account-menu">
                          <div
                            className="is-drilldown animate-height"
                            style={{ height: "65.1042px", maxWidth: "500px" }}
                          >
                            <ul
                              className="vertical menu drilldown mobile-menu"
                              data-drilldown
                              data-close-on-click="true"
                              data-auto-height="true"
                              data-animate-height="true"
                              data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                              role="tree"
                              aria-multiselectable="false"
                              data-mutate="3j69hm-drilldown"
                              data-n="81w3fn-n"
                            >
                              <li
                                className="offcanvas-my-account-link"
                                role="treeitem"
                              >
                                <a href="../hesabim/index.html">
                                  <span>Hesabım</span>
                                </a>
                              </li>
                              <li
                                className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--wishlist "
                                role="treeitem"
                              >
                                <a href="../favorilerim/index.html">
                                  <span>Favorilerim</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* end offcanvas-navs */}
                      <div className="offcanvas-bottom">
                        <hr className="menu-horizontal-rule" />
                        <ul className="social-icons">
                          <li className="facebook">
                            <a target="_blank" title="Facebook" href="#">
                              <svg
                                className="svg-icon"
                                viewBox="0 0 24 24"
                                enableBackground="new 0 0 24 24"
                                xmlSpace="preserve"
                              >
                                <use x={0} y={0} xlinkHref="#i-facebook" />
                              </svg>
                              <span className="s-circle_bg" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a target="_blank" title="Twitter" href="#">
                              <svg
                                className="svg-icon"
                                viewBox="0 0 24 24"
                                enableBackground="new 0 0 24 24"
                                xmlSpace="preserve"
                              >
                                <use x={0} y={0} xlinkHref="#i-twitter" />
                              </svg>
                              <span className="s-circle_bg" />
                            </a>
                          </li>
                          <li className="pinterest">
                            <a target="_blank" title="Pinterest" href="#">
                              <svg
                                className="svg-icon"
                                viewBox="0 0 24 24"
                                enableBackground="new 0 0 24 24"
                                xmlSpace="preserve"
                              >
                                <use x={0} y={0} xlinkHref="#i-pinterest" />
                              </svg>
                              <span className="s-circle_bg" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a target="_blank" title="Google Plus" href="#">
                              <svg
                                className="svg-icon"
                                viewBox="0 0 24 24"
                                enableBackground="new 0 0 24 24"
                                xmlSpace="preserve"
                              >
                                <use x={0} y={0} xlinkHref="#i-googleplus" />
                              </svg>
                              <span className="s-circle_bg" />
                            </a>
                          </li>
                        </ul>
                        {/* begin offcanvas-contact-section */}
                        <div className="offcanvas-contact-section">
                          <div className="offcanvas-contact">
                            <a href="mailto:info@bafk.com.tr">
                              info@bafk.com.tr
                            </a>
                            <br />
                            <a href="tel:+902122941112">+90 (212) 294 11 12</a>
                            <br />
                          </div>
                        </div>
                        {/* end offcanvas-contact-section */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end offcanvas_aside_left */}
            {/* Off-Canvas Aside Content Right */}
            <div className="offcanvas_aside offcanvas_aside_right">
              <div className="offcanvas_aside_content">
                <div className="offcanvas_minicart">
                  <div className="offcanvas_header">
                    <div className="close-icon">
                      <span className="close-icon_top" />
                      <span className="close-icon_bottom" />
                    </div>
                  </div>
                  <div className="widget woocommerce widget_shopping_cart">
                    <h2 className="widgettitle">Sepet</h2>
                    <div className="widget_shopping_cart_content" />
                  </div>
                </div>{" "}
              </div>
            </div>
            {/* end offcanvas_aside_right */}
            {/* Off-Canvas Aside Content Top */}
            <div className="offcanvas_aside offcanvas_aside_top site-search">
              <div className="nano">
                <div className="nano-content">
                  <div className="offcanvas_aside_content">
                    {/* begin offcanvas_search */}
                    <div className="offcanvas_search woocommerce">
                      {/* begin grid-container */}
                      <div className="grid-container">
                        <button className="close-icon">
                          <span className="close-icon_top" />
                          <span className="close-icon_bottom" />
                        </button>
                        {/* begin search-header */}
                        <div className="search-header">
                          <p className="search-text">
                            What are you looking for?
                          </p>
                          <div className="widget_product_search">
                            <div className="search-wrapp">
                              <form
                                className="woocommerce-product-search search-form  barberry-ajax-search"
                                role="search"
                                method="get"
                                action="https://bafk.com.tr/"
                                data-thumbnail={1}
                                data-price={1}
                                data-post_type="product"
                                data-count={8}
                              >
                                <div>
                                  <input
                                    type="text"
                                    defaultValue
                                    name="s"
                                    id="search-input"
                                    className="search-field search-input"
                                    placeholder="Start typing..."
                                    autoComplete="on"
                                  />
                                  <input
                                    type="hidden"
                                    name="post_type"
                                    defaultValue="product"
                                  />
                                  <a
                                    role="button"
                                    tabIndex={0}
                                    className="search-clear"
                                  >
                                    Clear
                                  </a>
                                  <div className="search_label">
                                    <div className="search_label-text" />
                                  </div>
                                  <input type="submit" defaultValue="Ara" />
                                </div>
                              </form>
                              <div className="search-results-wrapp">
                                <div className="barberry-search-loader" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end search-header */}
                      </div>
                      {/* end grid-container */}
                    </div>
                    {/* end offcanvas_search */}{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* end offcanvas_aside_top */}
            <div className="offcanvas_overlay" />
            <div className="navigation_overlay" />
            <div className="topbar_overlay" />
          </div>
          {/* end offcanvas_container */}
          <div
            className="rellax"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
