export interface IParticipants {
  OrganisationId: string;
  Status: string;
  OrganisationName: string;
  CreatedOn: string;
  LegalEntityName: string;
  CountryOfRegistration: string;
  CompanyRegister: string;
  Tag: string;
  Size: string;
  RegistrationNumber: string;
  RegistrationId: string;
  RegisteredName: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Postcode: string;
  Country: string;
  ParentOrganisationReference: string;
  AuthorisationServers: IAuthorisationServers[];
  OrgDomainClaims: IOrgDomainClaims[];
  OrgDomainRoleClaims: IOrgDomainRoleClaims[];
}

export interface IAuthorisationServers {
  AuthorisationServerId: string;
  AutoRegistrationSupported: boolean;
  AutoRegistrationNotificationWebhook: string;
  SupportsCiba: boolean;
  SupportsDCR: boolean;
  ApiResources: IApiResources[];
  AuthorisationServerCertifications: [];
  CustomerFriendlyDescription: string;
  CustomerFriendlyLogoUri: string;
  CustomerFriendlyName: string;
  DeveloperPortalUri: string;
  TermsOfServiceUri: string;
  NotificationWebhookAddedDate: string | null;
  OpenIDDiscoveryDocument: string;
  Issuer: string | null;
  PayloadSigningCertLocationUri: string;
  ParentAuthorisationServerId: string | null;
  DeprecatedDate: string | null;
  RetirementDate: string | null;
  SupersededByAuthorisationServerId: string | null;
}

export interface IApiResources {
  ApiResourceId: string;
  ApiVersion: string;
  ApiDiscoveryEndpoints: IApiDiscoveryEndpoints[];
  FamilyComplete: boolean;
  ApiCertificationUri: string;
  CertificationStatus: string;
  CertificationStartDate: string;
  CertificationExpirationDate: string;
  ApiFamilyType: string;
}

export interface IApiDiscoveryEndpoints {
  ApiDiscoveryId: string;
  ApiEndpoint: string;
}

export interface IOrgDomainClaims {
  AuthorisationDomainName: string;
  AuthorityName: string;
  RegistrationId: string;
  Status: string;
}

export interface IOrgDomainRoleClaims {
  Status: string;
  AuthorisationDomain: string;
  Role: string;
  Authorisations: [];
  RegistrationId: string;
}
