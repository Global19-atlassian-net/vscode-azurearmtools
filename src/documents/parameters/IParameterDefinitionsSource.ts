// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// ----------------------------------------------------------------------------

import { IJsonDocument } from "../templates/IJsonDocument";
import { IParameterDefinition } from "./IParameterDefinition";

/**
 * Represents a "parameters" JSON object that defines a set of parameter names
 *   and their types and metadata.
 * This could be the main "parameters" object in a deployment template, or
 *   could be a section in a nested template, or it could be the parameters section
 *   in
 *   a linked template.
 */
export interface IParameterDefinitionsSource {
    /**
     * The document containing the parameter definitions
     * For linked templates, this will be the linked template.
     * For nested templates, this will be the document containing the nested template.
     */
    document: IJsonDocument;

    /**
     * Parameter definitions.
     * For linked templates, these are defined in the linked template
     * For nested templates, these are defined in one of the nested template's parent objects, possibly the main "parameters" section of the template.
     * For other scenarios, it will be the main "parameters" section of the template.
     */
    parameterDefinitions: IParameterDefinition[];
}
