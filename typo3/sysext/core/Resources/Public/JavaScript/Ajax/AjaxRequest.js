/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","../BackwardCompat/JQueryNativePromises","./AjaxResponse","./ResponseError","./InputTransformer"],(function(e,t,s,n,r,o){"use strict";class a{constructor(e){this.queryArguments="",this.url=e,this.abortController=new AbortController,s.default.support()}withQueryArguments(e){const t=this.clone();return t.queryArguments=(""!==t.queryArguments?"&":"")+o.InputTransformer.toSearchParams(e),t}async get(e={}){const t=await this.send(Object.assign(Object.assign({},{method:"GET"}),e));return new n.AjaxResponse(t)}async post(e,t={}){var s;const r={body:"string"==typeof e?e:o.InputTransformer.byHeader(e,null===(s=t)||void 0===s?void 0:s.headers),cache:"no-cache",method:"POST"},a=await this.send(Object.assign(Object.assign({},r),t));return new n.AjaxResponse(a)}async put(e,t={}){var s;const r={body:"string"==typeof e?e:o.InputTransformer.byHeader(e,null===(s=t)||void 0===s?void 0:s.headers),cache:"no-cache",method:"PUT"},a=await this.send(Object.assign(Object.assign({},r),t));return new n.AjaxResponse(a)}async delete(e={},t={}){var s;const r={cache:"no-cache",method:"DELETE"};"object"==typeof e&&Object.keys(e).length>0?r.body=o.InputTransformer.byHeader(e,null===(s=t)||void 0===s?void 0:s.headers):"string"==typeof e&&e.length>0&&(r.body=e);const a=await this.send(Object.assign(Object.assign({},r),t));return new n.AjaxResponse(a)}abort(){this.abortController.abort()}clone(){return Object.assign(Object.create(this),this)}async send(e={}){const t=await fetch(this.composeRequestUrl(),this.getMergedOptions(e));if(!t.ok)throw new r.ResponseError(t);return t}composeRequestUrl(){let e=this.url;if("?"===e.charAt(0)&&(e=window.location.origin+window.location.pathname+e),e=new URL(e,window.location.origin).toString(),""!==this.queryArguments){e+=(this.url.includes("?")?"&":"?")+this.queryArguments}return e}getMergedOptions(e){return Object.assign(Object.assign(Object.assign({},a.defaultOptions),e),{signal:this.abortController.signal})}}return a.defaultOptions={credentials:"same-origin"},a}));