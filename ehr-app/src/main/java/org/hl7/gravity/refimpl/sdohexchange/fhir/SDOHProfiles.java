package org.hl7.gravity.refimpl.sdohexchange.fhir;

import lombok.experimental.UtilityClass;

/**
 * SDOH profiles for affected FHIR resources. Currently we do not force EHRs to use resources with these profiles. But
 * all resources generated by this app will have one.
 */
@UtilityClass
public class SDOHProfiles {

  public String TASK = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Task-Base-1";
  public String CONDITION = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Condition-Base-1";
  public String SERVICE_REQUEST =
      "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ServiceRequest-Base-1";
  public String GOAL = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Goal-Base-1";
  public String PROCEDURE = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Procedure-Base-1";
  public String CONSENT = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Consent";
}
