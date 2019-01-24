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
:host{display:inline-flex;box-sizing:border-box;border-style:solid;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;transition:background var(--spectrum-global-animation-duration-100) ease-out,border-color var(--spectrum-global-animation-duration-100) ease-out,color var(--spectrum-global-animation-duration-100) ease-out,box-shadow var(--spectrum-global-animation-duration-100) ease-out;text-decoration:none;cursor:pointer;border-width:var(--spectrum-button-primary-border-size);border-radius:var(--spectrum-button-primary-border-radius);height:var(--spectrum-button-primary-height);min-width:var(--spectrum-button-primary-min-width);padding:0 calc(var(--spectrum-button-primary-padding-x) - var(--spectrum-button-primary-border-size)) 0;font-size:var(--spectrum-button-primary-text-size);font-weight:var(--spectrum-button-primary-text-font-weight)}#label,:host{align-items:center;justify-content:center}#label{display:flex}#label:empty{display:none}slot[name=icon]::slotted(svg){width:var(--spectrum-alias-workflow-icon-size,18px);height:var(--spectrum-alias-workflow-icon-size,18px)}
`;
