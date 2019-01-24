/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
export default /* css */ `
:host{display:block;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);margin:32px 32px 0;max-width:600px;width:100%}:host([wide]){max-width:1200px}#container{display:flex;flex-direction:column;margin:32px}#description{margin-bottom:16px}h2{color:rgba(0,0,0,.54);margin:0 0 24px;font-size:32px;font-weight:400}#demo-container{background:var(--demo-section-demo-bg-color,#eee);padding:16px}#demo,#demo-container{display:flex;flex-direction:column}#demo{justify-content:center;align-items:center}#demo-code{display:none;background-color:var(--demo-section-code-bg-color,#fff);border:1px solid var(--demo-section-code-border-color,#ddd)}:host([show-demo-code]) #demo-code{display:block}slot[name=demo]::slotted(*){margin:8px}#code-toggle{align-self:flex-end;font-size:var(--font-size-smallest,10px);cursor:pointer}#code-toggle:hover{text-decoration:underline}
`;
