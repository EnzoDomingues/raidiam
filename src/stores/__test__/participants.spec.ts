import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useParticipantsStore } from "../participants";

const mockDataresponse = {
  OrganisationId: "fefac57d-1d50-5615-89b2-0b2d80623a28",
  Status: "Active",
  OrganisationName: "CCR DE OURO",
  CreatedOn: "2021-01-11T13:40:24.442Z",
  LegalEntityName: "COOPERATIVA DE CRÉDITO RURAL DE OURO   SULCREDI/OURO",
  CountryOfRegistration: "BR",
  CompanyRegister: "Cadastro Nacional da Pessoa Jurídica",
  Tag: null,
  Size: null,
  RegistrationNumber: "07853842000135",
  RegistrationId: "07853842",
  RegisteredName: "COOPERATIVA DE CRÉDITO RURAL DE OURO   SULCREDI/OURO",
  AddressLine1: "Rua Felipe Schmidt 1882",
  AddressLine2: "Centro",
  City: "OURO",
  Postcode: "89663-000",
  Country: "BR",
  ParentOrganisationReference: "",
  AuthorisationServers: [
    {
      AuthorisationServerId: "75671765-8b3f-42a8-9b9c-f1f3db31c20d",
      AutoRegistrationSupported: true,
      AutoRegistrationNotificationWebhook: null,
      SupportsCiba: false,
      SupportsDCR: false,
      ApiResources: [
        {
          ApiResourceId: "875dd6bc-3c40-44a0-a51f-87108dc958bc",
          ApiVersion: "1",
          ApiDiscoveryEndpoints: [
            {
              ApiDiscoveryId: "c21f7ecb-ee1f-43d5-9f6c-f0bff5fd42ed",
              ApiEndpoint:
                "https://api.dev.ouro.hub.cashway.fsapps.io/open-banking/payments/v1/pix/payments",
            },
            {
              ApiDiscoveryId: "5176dd09-3840-4810-8e5b-db1df7eb455d",
              ApiEndpoint:
                "https://api.dev.ouro.hub.cashway.fsapps.io/open-banking/payments/v1/pix/payments/{paymentId}",
            },
          ],
          FamilyComplete: true,
          ApiCertificationUri:
            "https://github.com/OpenBanking-Brasil/conformance/blob/main/submissions/functional/consents/1.0.3/API_Consents.zip",
          CertificationStatus: null,
          CertificationStartDate: null,
          CertificationExpirationDate: null,
          ApiFamilyType: "payments-pix",
        },
        {
          ApiResourceId: "900f0e27-89ca-4231-942e-50db1408a9fb",
          ApiVersion: "1",
          ApiDiscoveryEndpoints: [
            {
              ApiDiscoveryId: "a0dc25ff-06ce-4eb8-9395-0dcad4581717",
              ApiEndpoint:
                "https://api.dev.ouro.hub.cashway.fsapps.io/open-banking/payments/v1/consents",
            },
            {
              ApiDiscoveryId: "4a7e2b9a-cd2a-4d28-b247-4a6307ddcb4c",
              ApiEndpoint:
                "https://api.dev.ouro.hub.cashway.fsapps.io/open-banking/payments/v1/consents/{consentId}",
            },
          ],
          FamilyComplete: true,
          ApiCertificationUri:
            "https://github.com/OpenBanking-Brasil/conformance/blob/main/submissions/functional/consents/1.0.3/API_Consents.zip",
          CertificationStatus: null,
          CertificationStartDate: null,
          CertificationExpirationDate: null,
          ApiFamilyType: "payments-consents",
        },
      ],
      AuthorisationServerCertifications: [],
      CustomerFriendlyDescription: "CCR de Ouro Auth Server",
      CustomerFriendlyLogoUri:
        "https://sulcredi.com.br/sistema/arquivos/imagens/d35f03444597b6faf04a873919f2f06e.svg",
      CustomerFriendlyName: "CCR de Ouro Auth Server",
      DeveloperPortalUri: null,
      TermsOfServiceUri: null,
      NotificationWebhookAddedDate: null,
      OpenIDDiscoveryDocument:
        "https://api.dev.ouro.hub.cashway.fsapps.io/orgs/ouro/.well-known/openid-configuration",
      Issuer: "https://api.dev.ouro.hub.cashway.fsapps.io/orgs/ouro",
      PayloadSigningCertLocationUri:
        "https://api.dev.ouro.hub.cashway.fsapps.io/orgs/ouro/jwks",
      ParentAuthorisationServerId: null,
      DeprecatedDate: null,
      RetirementDate: null,
      SupersededByAuthorisationServerId: null,
    },
  ],
  OrgDomainClaims: [
    {
      AuthorisationDomainName: "Open Banking Brasil ",
      AuthorityName: "Banco Central Do Brasil",
      RegistrationId: "",
      Status: "Active",
    },
  ],
  OrgDomainRoleClaims: [
    {
      Status: "Active",
      AuthorisationDomain: "Open Banking Brasil ",
      Role: "PAGTO",
      Authorisations: [],
      RegistrationId: "pagto",
    },
  ],
};

describe("Participants Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Shoud save the participants list", async () => {
    const { fetchParticipants } = useParticipantsStore();
    await fetchParticipants();
    const { participants } = storeToRefs(useParticipantsStore());

    expect(participants.value[0]).toEqual(mockDataresponse);
  });
});
