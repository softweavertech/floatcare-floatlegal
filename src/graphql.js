import gql from 'graphql-tag'
/*
`
type FamilyContactsInput {
  firstName: String
  lastName: String
  phoneNumber: String
  email: String
  relation: String
  isEmergencyContact: Boolean
}
type HouseholdInput {
  address: String
  state: Boolean
  zip: String
  country: String
  phoneNumber: String
  email:String
  familyContacts: [FamilyContactsInput]
}

type Tag {
  id: ID!
  tag: String!
  number: Int!
  tutorials: [Tutorial!]! @relation(name: "TutorialTags")
}
`*/
export const CREATE_ORGANIZATION = gql `mutation CREATE_ORGANIZATION($name: String!,$phone:String, $email: String, $address: String, $address2: String, $city: String,$state: String,$postalCode: String,$country: String,$logo:String,$status:String,  $organizationType: String) {
        createOrganization(
            name: $name,
            phoneNumber: $phone,
            email: $email,
            address: $address,
            address2: $address2,
            city: $city,
            state: $state,
            postalCode: $postalCode,
            country: $country,
            logo: $logo,
            status: $status,
            organizationType: $organizationType
        ) {
            organizationId
        }
    }`

export const UPDATE_ORGANIZATION = gql `mutation updateOrganization($organizationId:Long!,$name: String,$phone:String, $email: String, $address: String, $address2: String, $city: String, $state: String, $postalCode: String, $country: String, $logo:String, $status:String, $ownerId: Long,  $organizationType: String) {
  updateOrganization(
      organizationId:$organizationId
      name: $name,
      phoneNumber: $phone,
      email: $email,
      address: $address,
      address2: $address2,
      city: $city,
      state: $state,
      postalCode: $postalCode,
      country: $country,
      logo: $logo,
      status: $status,
      ownerId:$ownerId,
      organizationType: $organizationType
  ) {
    organizationId
    name
    status
    address
    city
    state
    country
    status
    logo
    accountOwners {
      firstName
      lastName
      userTypeName
    }
    businesses {
        businessType
        businessTypeCount
    }
  }
}`

export const CREATE_ACCOUNT_OWNER = gql `mutation createUserBasicInformation($firstName: String, $lastName: String,$title: String,$phone: String, $email: String, $gender:String, $organizationId:Long,$profilePhoto:String, $staffUserCoreTypeId:Long, $userTypeId:Long,$password: String,$defaultPassword: String, $dateOfBirth:String, 
  $address1: String, $address2: String, $city:String, $state:String, $country:String, $postalCode: String, $staffUserSubCoreTypeId:Long,  $specialities:[String], $userLanguageInput:[userLanguageInput], $ethnicType:String, $invitedBy:Long, $invitedFirmId:Long, $invitationStatus:String
  ) {
    createUserBasicInformation(
    firstName:$firstName,
    lastName:$lastName,
    title:$title,
    phone:$phone,
    email:$email,
    gender:$gender,
    organizationId:$organizationId,
    profilePhoto:$profilePhoto,
    staffUserCoreTypeId:$staffUserCoreTypeId,
    staffUserSubCoreTypeId:$staffUserSubCoreTypeId,
    userTypeId:$userTypeId,
    password:$password,
    dateOfBirth:$dateOfBirth,
    address1:$address1,
    address2:$address2,
    city:$city,
    state:$state,
    country:$country,
    postalCode:$postalCode,
    defaultPassword:$defaultPassword,
    specialities:$specialities,
    userLanguageInput: $userLanguageInput
    ethnicType:$ethnicType,
    invitationStatus: $invitationStatus
    invitedBy: $invitedBy
    invitedFirmId: $invitedFirmId
    ) {
        userId
        }
    }`
export const UPDATE_ACCOUNT_OWNER = gql `mutation updateUserBasicInformation($organizationId:Long, $userId:Long!,$firstName: String, $lastName: String,$title: String,$phone: String,$email: String,$organizationId:Long,$profilePhoto:String,$staffUserCoreTypeId:Long, $userTypeId:Long, $address1:String, $address2:String, $city:String, $state: String, $country:String, $postalCode:String,
  $gender:String,$dateOfBirth:String,$bioInformation:String,$preferredName:String, $staffUserSubCoreTypeId: Long,  $userLanguageInput: [userLanguageInput], $userNationalProviderIdentityInput : userNationalProviderIdentityInput, $socialSecurityNumberInput : socialSecurityNumberInput, $cvFile: String, $status:String ,$ehrSystemIds: [ehrSystemId], $specialities:[String],  $ethnicType:String
      ) {
        updateUserBasicInformation(
          organizationId:$organizationId,
          userId:$userId,
          firstName:$firstName,
          lastName:$lastName,
          preferredName:$preferredName,
          title:$title,
          phone:$phone,
          email:$email,
          status:$status,
          profilePhoto:$profilePhoto,
          staffUserCoreTypeId:$staffUserCoreTypeId,
          staffUserSubCoreTypeId: $staffUserSubCoreTypeId,
          address1:$address1,
          address2:$address2,
          city:$city,
          state: $state,
          country:$country,
          postalCode:$postalCode,
          userTypeId:$userTypeId,
          gender:$gender,
          dateOfBirth:$dateOfBirth,
          bioInformation:$bioInformation
          userLanguageInput: $userLanguageInput
          userNationalProviderIdentityInput : $userNationalProviderIdentityInput
          socialSecurityNumberInput:  $socialSecurityNumberInput,
          cvFile: $cvFile,
          ehrSystemIds:$ehrSystemIds,
          specialities:$specialities,
          ethnicType:$ethnicType
          ) {
              userId
              }
          }`
export const CREATEAUTHOR_MUTATION = gql `mutation CREATEAUTHORMutation($name: String!, $age: Int!) {
    createAuthor(
            name: $name,
            age: $age
        ) {
            id
            name
        }
    }`
/*export const UPDATE_OWNER_IN_ORGANIZATION = gql`mutation updateOrganization($organizationId: Long!, $ownerId: Long!) {
      updateOrganization(
        organizationId:$organizationId,
        ownerId:$ownerId
      ) {
        organizationId
      }
    
  }`   */


export const GET_ORGANIZATION_BY_ID = gql ` query findOrganizationById($organizationId: Long!) {

  findOrganizationById(organizationId:$organizationId) {
    organizationId
    name
    country
    city
    state
    postalCode
    address
    address2
    email
    phoneNumber
    logo
    ownerId
    organizationType
    accountOwners {
      userId
      firstName
      lastName
      email
      phone
      title
      profilePhoto
    }
    staffMembers {
      userId
      firstName
      lastName
      email
      phone
      title
      profilePhoto
    }
  }

}`;

export const GET_ORGANIZATION_BY_ID_BASIC = gql ` query findOrganizationById($organizationId: Long!) {

  findOrganizationById(organizationId:$organizationId) {
    organizationId
    name
    country
    state
    city
    
    postalCode
    address
    address2
    email
    phoneNumber
    logo
    organizationType
  }

}`;

export const GET_ORGANIZATION_BY_ID_WITH_ACCOUNT_OWNER = gql ` query findOrganizationById($organizationId: Long!) {

  findOrganizationById(organizationId:$organizationId) {
    organizationId
    name
    country
    city
    state
    postalCode
    address
    address2
    email
    phoneNumber
    logo
    ownerId
    organizationType
    accountOwners {
      userId
      firstName
      lastName
      email
      phone
      title
      profilePhoto
    }
  }

}`;

export const GET_ORGANIZATION_DETAILS_BY_ID = gql ` query findOrganizationById($organizationId: Long!) {

  findOrganizationById(organizationId:$organizationId) {
    organizationId
    name
    country
    city
    state
    postalCode
    address
    address2
    email
    phoneNumber
    ownerId
    accountOwners {
      firstName
      lastName
      email
      phone
      title
      }
  }

}`;


export const GET_ORGANIZATION_BY_ID_STAFF = gql ` query findOrganizationById($organizationId: Long!) {

  findOrganizationById(organizationId:$organizationId) {
    organizationId
    name 
    staffMembers {
      userId
      firstName
      lastName
      email
      phone
      title
      profilePhoto
    }
  }

}`;
export const GET_USERINFORMATION_BY_ID = gql ` query findUsersById($userId: Long!, $organizationId:Long) {

findUsersById(userId:$userId) {
  userId
    city
    state
    country
    postalCode
    email
    firstName
    lastName
    preferredName
    phone
    title
    profilePhoto
    gender
    bioInformation
    dateOfBirth
    staffUserCoreTypeId
    staffUserCoreTypeName
    staffUserSubCoreTypeId  
    staffUserSubCoreTypeName
    address1
    address2
    muteAllNotifications
    status
    userLanguages {
      name
      canRead
      canWrite
      canSpeak
    }
    ethnicType
    socialSecurityNumber{
      issuedDate
      expirationDate
      socialSecurityNumber
      frontSide
      backSide
    }
    userNationalProviderIdentity{
      expirationDate
      issuedDate
      npiNumber
    }
    ehrSystems{
      ehrSystemId
      label
    }
    cvFile
    createdOn
    workspacesBasedOnOrganizationId(organizationId:$organizationId) {
      userWorkspaceId
      workspaceName
      workspaceId
      workspaceType
      userWorkspaceId
      invitationCode
      isJoined
      fteStatus
      isChargeRole
      isPreceptorRole
      departmentShiftIds
      organizationId
      staffUserCoreTypeId
      staffUserSubCoreTypeId
      isPrimaryDepartment
      businessId
      hiredOn 
      departmentShifts{
        departmentShiftId
        label
      }
    
    } 
    
    
  }


}`;
export const GET_ORGANIZATIONS = gql `
query {
  findAllOrganizations {
    organizationId
    name
    status
    address
    city
    state
    country
    status
    logo
    accountOwners {
      firstName
      lastName
      userTypeName
    } 
    businesses{
      businessTypeCount
      name
    }


  }
}`;
export const GET_BUSINESSES = gql ` query findAllBusinesses($organizationId:Long!) {

  findAllBusinesses(organizationId:$organizationId) {
    businessId
    name
    businessType
    businessTypeCount
    numberOfDepartment
    address
    address2
    isSateliteOffice
    city
    state
    country
    status
    department {
      departmentId
      departmentTypeName
    }

  }
}`;

export const CREATE_BUSINESS = gql `mutation CREATE_BUSINESS($organizationId: Long!,$name: String!,$phoneNumber:String,$isSateliteOffice: Boolean,$extension: Long, $businessTypeId: Long, $businessSubTypeId: Long, $email: String, $address: String, $address2: String, $city: String, $state: String,$postalCode: String,$country: String,$description: String, $status: String, $worksiteAvailabilityInput:[WorksiteAvailabilityInput], $clientInfo: ContactInformationInput, $providerInfo: ContactInformationInput) {
  createBusiness(
      organizationId:$organizationId,
      name: $name,
      phoneNumber: $phoneNumber,
      email: $email,
      address: $address,
      address2: $address2,
      city: $city,
      state: $state,
      postalCode: $postalCode,
      country: $country,
      extension:$extension,
      isSateliteOffice: $isSateliteOffice,
      businessTypeId:$businessTypeId,
      businessSubTypeId:$businessSubTypeId,
      description:$description,
      status:$status,
      worksiteAvailabilityInput:$worksiteAvailabilityInput, 
      clientInfo:$clientInfo
      providerInfo:$providerInfo
  ) {
    organizationId
    businessId
  }
}`
export const GET_BUSINESS_BY_ID = gql ` query findBusinessById($businessId: Long!, $userId: Long) {

findBusinessById(businessId:$businessId) {
    organizationId
    preferredSpecialities
    preferredSpecialitiesDetails{
      businessId
      name
      phoneNumber
      businessType
    }
    organizationDetails{
      organizationId
      name
    }
    businessId
    name
    country
    city
    state
    postalCode
    address
    address2
    email
    extension
    phoneNumber
    coverPhoto
    description
    status
    businessTypeId
    businessSubTypeId
    businessType 
    departmentByUserId(userId: $userId){
      departmentId
      departmentTypeName
      
    }
    clientInfo{
      phoneNumber
      faxNumber
      email
    }
    providerInfo{
      phoneNumber
      faxNumber
      email
    }
    worksiteAvailability {
      weekDay
      isClosed
      startAndEndTime {
        startTime
        endTime
      }
    }
  }

}`;
export const UPDATE_BUSINESS = gql `mutation UPDATE_BUSINESS($businessId: Long!,$name: String,$phoneNumber:String, $extension: Long, $businessTypeId: Long, $businessSubTypeId: Long, $email: String, $address: String, $address2: String, $city: String, $state: String, $postalCode: String,$country: String,$description: String, $status: String, $worksiteAvailabilityInput:[WorksiteAvailabilityInput], $clientInfo: ContactInformationInput, $providerInfo: ContactInformationInput, $preferredSpecialities:[Long]) {
  updateBusiness(
    businessId:$businessId,
      name: $name,
      phoneNumber: $phoneNumber,
      email: $email,
      address: $address,
      address2: $address2,
      city: $city,
      state: $state,
      postalCode: $postalCode,
      country: $country,
      extension:$extension,
      businessTypeId:$businessTypeId,
      businessSubTypeId:$businessSubTypeId,
      description: $description,
      status:$status,
      worksiteAvailabilityInput:$worksiteAvailabilityInput,
      clientInfo: $clientInfo
      providerInfo: $providerInfo
      preferredSpecialities:$preferredSpecialities
  ) {
    organizationId
    businessId
  }
}`;
export const GET_BUSINESSES_AND_DEPARTMENTS = gql ` query findAllBusinesses($organizationId:Long!) {

  findAllBusinesses(organizationId:$organizationId) {
    businessId
    name
    businessType
    businessTypeCount
    address
    city
    state
    country
    postalCode
    numberOfDepartment
    status
    department {
      departmentId
      departmentTypeName
      status
      phoneNumber
      extension
      email
      address
      address2
      description
      staffRoles {
      staffUserCoreTypeId
      staffCount
      staffUserCoreTypeName
      }
      shiftType {
        departmentShiftId
        label
        startTime
        endTime
        icon
        color
      }
      
    }
    
  }
}`;
export const CREATE_DEPARTMENT = gql `mutation CREATE_DEPARTMENT($businessId: Long!,$departmentTypeName: String!,$phoneNumber:String, $extension: Long, $email: String, $address: String!, $address2: String, $description: String,$status: String,$roles: [Long]) {
  createDepartment(
      businessId:$businessId,
      departmentTypeName: $departmentTypeName,
      phoneNumber: $phoneNumber,
      extension: $extension,
      email: $email,
      address: $address,
      address2: $address2,
      description: $description,
      status: $status,
      roles:$roles
  ) {
     departmentId
  }
}`
export const GET_DEPARTMENT_BY_ID = gql ` query findDepartmentById($departmentId: Long!) {

findDepartmentById(departmentId:$departmentId) {
    departmentId
    businessId
    departmentTypeName
    address
    address2
    email
    extension
    phoneNumber
    description
    status
    staffRoles {
      staffUserCoreTypeId
      staffCount
      staffUserCoreTypeName
    }
  }

}`;
export const UPDATE_DEPARTMENT = gql `mutation UPDATE_DEPARTMENT($departmentId: Long!,$businessId: Long!,$departmentTypeName: String!,$phoneNumber:String!,$extension:Long, $email: String!, $address: String!, $address2: String, $description: String, $status: String,$roles: [Long]) {
  updateDepartment(
    departmentId:$departmentId,
    businessId:$businessId,
    departmentTypeName: $departmentTypeName,
      phoneNumber: $phoneNumber,
      extension: $extension,
      email: $email,
      address: $address,
      address2: $address2,
      description: $description,
      status: $status,
      roles:$roles
  ) {
    departmentId
  }
}`;
export const GET_BUSINESS_TYPES = gql `
  query {
    findAllBusinessTypes {
      businessTypeId
      label
    }
  }`;
export const GET_BUSINESS_SUB_TYPES = gql `
  query {
    findAllBusinessSubTypes {
      businessSubTypeId
      label
      }
  }`;
export const GET_STAFF_CORE_TYPES = gql `
  query {
    findAllStaffUserCoreTypes {
      id
      label
      shortName
      numberOfStaff
      
      }
  }`;
export const GET_STAFF_CORE_TYPES_FIRMTYPE = gql ` query findAllStaffUserCoreTypesByFirmType($firmType: String)  {
    findAllStaffUserCoreTypesByFirmType(firmType: $firmType) {
      id
      label
      shortName
      numberOfStaff
      
      }
  }`;
export const GET_SUBROLE_TYPES = gql ` query findSubRoleTypesByStaffUserCoreTypeId($parentId: Long!)  {
    findSubRoleTypesByStaffUserCoreTypeId (parentId:$parentId) {
      id
      parentId
      label
      }
  }`;






export const GET_DEPARTMENT_TYPES = gql `
  query {
    findAllDepartmentTypes {
      id
      label
      }
  }`;
export const DELETE_ORGANIZATION = gql ` mutation DELETE_ORGANIZATION($organizationId: Long!) {
  
  deleteOrganization(organizationId:$organizationId)

  }`;
export const GET_STAFFLIST_BY_ROLES = gql ` query findAllStaffMembersByOrganizationAndCoreType($organizationId:Long!) {
  findAllStaffMembersByOrganizationAndCoreType(organizationId:$organizationId){
    label
    staffMembers {
      userId
      firstName
      lastName
      profilePhoto
      gender
      email
      phone
      staffUserCoreTypeName
      staffUserSubCoreTypeName
      address1
      address2
      city
      state
      workspacesBasedOnOrganizationId(organizationId:$organizationId){
        workspaceName
        fteStatus
        statusByWorkspaces
        worksites {
          name
          address 
          address2 
          city
          state
          country
        }
      }
      status
    }
    numberOfStaff
    
    
  }
}
`;
export const UPDATE_USER_STATUS = gql `mutation updateUserStatus($userId: Long!, $authorityId: Long!, $status: String) {
  updateUserStatus(
    userId:$userId,
    authorityId:$authorityId,
    status: $status
    ) 
    {
      userId
      status
    }
  }`;
export const CREATE_USER_WORKSPACE = gql `mutation createUserWorkspace($userId: Long!, $fteStatus: String,$workspaceId: Long,$workspaceType: String!,$isChargeRole: Boolean!,$isPreceptorRole: Boolean!,$organizationId: Long!,$departmentShiftIds : [Long],$staffUserCoreTypeId:Long,$staffUserSubCoreTypeId:Long,$isPrimaryDepartment:Boolean,$businessId:Long) {
    createUserWorkspace(
      userId:$userId,
      fteStatus:$fteStatus,
      workspaceId:$workspaceId,
      workspaceType:$workspaceType,
      isChargeRole:$isChargeRole,
      isPreceptorRole:$isPreceptorRole,
      organizationId:$organizationId,
      departmentShiftIds:$departmentShiftIds,
      staffUserCoreTypeId:$staffUserCoreTypeId,
      staffUserSubCoreTypeId:$staffUserSubCoreTypeId,
      isPrimaryDepartment:$isPrimaryDepartment,
      businessId:$businessId
      ) {
        userId
        userWorkspaceId
        workspaceId
          }
      }`;

export const UPDATE_USER_WORKSPACE = gql `mutation updateUserWorkspace($userWorkspaceId: Long,$userId: Long, $fteStatus: String,$workspaceId: Long,$workspaceType: String,$isChargeRole: Boolean,$isPreceptorRole: Boolean,$invitationCode:String,$staffUserCoreTypeId: Long, $staffUserSubCoreTypeId: Long,$isPrimaryDepartment: Boolean,$departmentShiftIds: [Long], $userAvailabilityInput: [UserAvailabilityInput],$businessId:Long) {
  updateUserWorkspace(
    userId:$userId,
    fteStatus:$fteStatus,
    workspaceId:$workspaceId,
    workspaceType:$workspaceType,
    isChargeRole:$isChargeRole,
    isPreceptorRole:$isPreceptorRole,
    userWorkspaceId:$userWorkspaceId,
    invitationCode: $invitationCode,
    staffUserCoreTypeId:$staffUserCoreTypeId,
    staffUserSubCoreTypeId:$staffUserSubCoreTypeId,
    isPrimaryDepartment:$isPrimaryDepartment,
    departmentShiftIds:$departmentShiftIds,
    businessId:$businessId,
    userAvailabilityInput:$userAvailabilityInput
    ) {
        userId
        userWorkspaceId
        }
    }`;
export const ALL_DEPARTMENT_BY_ORGANIZATION = gql ` query findAllDepartmentsByOrganizationId($organizationId:Long!) {
  findAllDepartmentsByOrganizationId(organizationId:$organizationId){
    departmentId
    departmentTypeName
  }
}
`;
export const GET_STAFFINFORMATION_BY_ID = gql ` query findUsersById($userId: Long!,$organizationId:Long) {

  findUsersById(userId:$userId) {
    userId
      city
      state      
      country
      postalCode
      email
      firstName
      lastName
      phone
      title
      profilePhoto
      staffUserCoreTypeName
      staffUserCoreTypeId
      defaultPassword
      address1
      address2
      workspacesBasedOnOrganizationId(organizationId:$organizationId) {
        userWorkspaceId
        workspaceName
        workspaceId
        workspaceType
        userWorkspaceId
        invitationCode
        isJoined
        fteStatus
        isChargeRole
        isPreceptorRole
        departmentShiftIds
        organizationId
        staffUserCoreTypeId
        staffUserSubCoreTypeId
        isPrimaryDepartment
        businessId
        hiredOn 
        departmentShifts{
          departmentShiftId
          label
        }
      
      } 
    }
  
  }`;
export const GET_USERWORKSPACE_BY_ID = gql ` query getWorkspaceById($userWorkspaceId: Long!) {

getWorkspaceById(userWorkspaceId:$userWorkspaceId) {
    
        userInformation{
          userId
          firstName
          lastName
          gender
          email
          phone
          secondaryPhoneNumber
          profilePhoto
          staffUserCoreTypeId
          staffUserSubCoreTypeId
          staffUserCoreTypeName
          staffUserSubCoreTypeName
          address1
          address2
          distanceFromPatient
          preferredProviderInWorksite
          organizationDetails{
            organizationId
            name
          }
        }
        workspaceName
        workspaceId
        workspaceType
        userWorkspaceId
        fteStatus
        isChargeRole
        isPreceptorRole
        organizationName
    staffUserCoreTypeName
    staffUserSubCoreTypeName
    userAvailability{
      weekDay 
      type
      }
    worksites {
      businessId
      name
      address
      city
      state
      department{
        departmentTypeName
      }
    }
      
    }
  
  }`;
export const DELETE_BUSINESS = gql ` mutation DELETE_BUSINESS($businessId: Long!) {
  
  deleteBusiness(businessId:$businessId)
  
    }`;
export const DELETE_DEPARTMENT = gql ` mutation DELETE_DEPARTMENT($departmentId: Long!) {
  
  deleteDepartment(departmentId:$departmentId)
        
    }`;
export const DELETE_DEPARTMENT_SHIFTS = gql ` mutation deleteDepartmentShift($departmentShiftId: Long!) {
  
      deleteDepartmentShift(departmentShiftId:$departmentShiftId)
            
        }`;
export const DELETE_USER = gql ` mutation DELETE_USER($userId: Long!,$organizationId:Long) {
  
  deleteUser(userId:$userId,organizationId:$organizationId)
            
    }`;
export const CREATE_OPENSHIFT_REQUEST = gql `mutation createOpenShift($worksiteId: Long, $departmentId: Long,$shiftTypeId: Long,$onDate: String,$startTime: String,$endTime: String,$staffUserCoreTypeId: Long,$quota: Long,$invitees: [Int],$isSendNotifications: Boolean,$isAutoApprove:Boolean,$isAutoClose:Boolean,$isAllowOvertime:Boolean,$note:String) {
      
        createOpenShift(
          worksiteId:$worksiteId,
          departmentId:$departmentId,
          shiftTypeId:$shiftTypeId,
          onDate:$onDate,
          startTime:$startTime,
          endTime:$endTime,
          staffUserCoreTypeId:$staffUserCoreTypeId,
          quota:$quota,
          invitees:$invitees,
          isSendNotifications:$isSendNotifications,
          isAutoApprove:$isAutoApprove,
          isAutoClose:$isAutoClose,
          isAllowOvertime:$isAllowOvertime,
          note:$note
        ) {
          openShiftId
        }
      
        }`
export const GET_OPENSHIFTS_BY_WORKSITEID = gql ` query getOpenShiftDetailsByWorksiteId($worksiteId: Long!, $selectedDate: String) {

          getOpenShiftDetailsByWorksiteId(worksiteId:$worksiteId,selectedDate:$selectedDate) {
              
                  openShiftId
                  worksiteId
                  departmentId
                  shiftTypeId
                  onDate
                  startTime
                  endTime
                  quota
                  status
                  staffUserName
                  shiftType{
                    label
                  }
                
              }
            
            }`;

export const GET_OPENSHIFTS_BY_WORKSPACEID = gql ` query getOpenShiftDetailsByWorkspaceId($workspaceId: Long!, $selectedDate: String) {

  getOpenShiftDetailsByWorkspaceId(workspaceId:$workspaceId,selectedDate:$selectedDate) {
      
          openShiftId
          worksiteId
          departmentId
          shiftTypeId
          onDate
          startTime
          endTime
          quota
          status
          staffUserName
          shiftType{
            label
          }
          approvedCount,
          acceptedCount,
          pendingCount
        
      }
    
    }`;
export const GET_FLEXOFF_BY_WORKSPACEID = gql ` query getFlexOffByWorkspaceIdAndSelectedDate($workspaceId: Long!, $selectedDate: String) {

  getFlexOffByWorkspaceIdAndSelectedDate(workspaceId:$workspaceId,selectedDate:$selectedDate) {
                  
                flexOffId
                worksiteId
                      departmentId
                      shiftTypeId
                      onDate
                      startTime
                      endTime
                      quota
                      status
                      staffUserName
                    
                  }
                
                }`;
export const GET_OPENSHIFTS_BY_ID = gql ` query getOpenShiftDetailsByOpenShiftId($openShiftId: Long!) {

              getOpenShiftDetailsByOpenShiftId(openShiftId:$openShiftId) {
                  
                      openShiftId
                      worksiteId
                      worksiteName
                      departmentName
                      shiftType {
                        label
                        color
                        icon
                        startTime
                        endTime
                      }
                      worksiteAddress
                      departmentId
                      shiftTypeId
                      onDate
                      startTime
                      endTime
                      quota
                      status
                      isUrgent
                      isSendNotifications
                      isAutoApprove
                      isAutoClose
                      isAllowPartial 
                      isAllowOvertime
                      note
                      staffUserName 
                      
                      invitees {
                        openShiftId
                        userId
                        firstName
                        lastName
                        profilePhoto
                        isApproved
                        isAccepted
                        scheduleHours
                        fteStatus
                        hiredOn 

                      }
                    
                  }
                
                }`;
export const GET_FLEXOFF_BY_ID = gql ` query getFlexOffByFlexOffId($flexOffId: Long!) {

  getFlexOffByFlexOffId(flexOffId:$flexOffId) {
                      
                          flexOffId
                          worksiteId
                          worksiteName
                          departmentName
                          shiftType {
                            label
                            color
                            icon
                            startTime
                            endTime
                          }
                          worksiteAddress
                          departmentId
                          shiftTypeId
                          onDate
                          startTime
                          endTime
                          quota
                          status
                          isSendNotifications
                          isAutoApprove
                          note
                          staffUserName
                          fullFlexOff
                          invitees {
                            flexOffId
                            userId
                            firstName
                            lastName
                            profilePhoto
                            isApproved
                            isAccepted
                            scheduleHours
                            fteStatus
                            hiredOn  
                            shiftTime
                            lastFlex
                          }
                        
                      }
                    
                    }`;
export const DELETE_OPENSHIFT = gql ` mutation deleteOpenShift($openShiftId: Long!) {
  
  deleteOpenShift(openShiftId:$openShiftId)
                        
                }`;
export const DELETE_FLEXOFF = gql ` mutation deleteFlexOff($flexOffId: Long!) {
  
  deleteFlexOff(flexOffId:$flexOffId)
                                        
                                }`;
export const GET_SCHEDULE_LAYOUT_BY_DEPARTMENT = gql `query findScheduleLayoutByDepartmentId($departmentId: Long!) {
  findScheduleLayoutByDepartmentId(departmentId:$departmentId){
    status
    scheduleLayoutId
    departmentId
    scheduleStartDate
    scheduleEndDate
    scheduleLength
    shiftPlanningStartDate
    shiftPlanningEndDate
    shiftPlanningPhaseLength
    makeStaffAvailabilityDeadLineLength
    makeStaffAvailabilityDeadLine
    publishedOn
    scheduleQuota { 
      shiftTypeId
      staffCoreTypeId
      quota
      staffCoreTypeName
      
    }
  }
}`

export const CREATE_FLEXOFF_REQUEST = gql `mutation createFlexOff($worksiteId: Long, $departmentId: Long,$onDate: String,$startTime: String,$endTime: String,$staffUserCoreTypeId: Long,$quota: Long,$invitees: [Int],$isSendNotifications: Boolean,$isAutoApprove:Boolean,$fullFlexOff:Boolean,$note:String) {
      
  createFlexOff(
    worksiteId:$worksiteId,
    departmentId:$departmentId,
    onDate:$onDate,
    startTime:$startTime,
    endTime:$endTime,
    staffUserCoreTypeId:$staffUserCoreTypeId,
    quota:$quota,
    invitees:$invitees,
    isSendNotifications:$isSendNotifications,
    isAutoApprove:$isAutoApprove,
    fullFlexOff:$fullFlexOff,
    note:$note
  ) {
    flexOffId
  }

  }`

export const GET_SHIFT_TYPES_BY_DEPARTMENT = gql `query getShiftTypesByDepartmentId($departmentId: Long!) {
  getShiftTypesByDepartmentId(departmentId:$departmentId){
    departmentShiftId
    departmentId
    color
    icon
    startTime
    endTime
    label
    staffCoreTypeIds 
    staffCoreTypes{
      id 
      label 
    }
  }
}`
export const GET_SHIFT_TYPES_BY_DEPARTMENT_AND_STAFFCORETYPE = gql `query getShiftTypesByDepartmentIdAndStaffCoreType($departmentId: Long!, $staffCoreTypeId: Long) {
  getShiftTypesByDepartmentIdAndStaffCoreType(departmentId:$departmentId, staffCoreTypeId: $staffCoreTypeId){
    departmentShiftId
    departmentId
    color
    icon
    startTime
    endTime
    label
    staffCoreTypeIds 
    staffCoreTypes{
      id 
      label 
    }
  }
}`

export const UPDATE_DEPARTMENT_SETTINGS = gql `mutation updateDepartmentSettings($departmentSettingId: Long, $departmentId: Long, $customName: String,$workWeekDay: String,$workPayPeriod: String,$workPayPeriodHours: Long) {
  
  updateDepartmentSettings(
    departmentSettingId:$departmentSettingId
  departmentId: $departmentId
  customName:$customName
  workWeekDay: $workWeekDay
  workPayPeriod: $workPayPeriod
  workPayPeriodHours: $workPayPeriodHours
    ) {
      departmentSettingId
    }
  
  }`

export const GET_DEPARTMENT_SETTINGS = gql `query getDepartmentSettingsByDepartmentId($departmentId: Long!) {
    getDepartmentSettingsByDepartmentId(departmentId:$departmentId){
      departmentId
      departmentSettingId
      departmentName
      departmentId
      customName
      workWeekDay
      workPayPeriod
      workPayPeriodHours
    }
  }`

export const UPDATE_DEPARTMENT_SHIFTS = gql `mutation updateDepartmentShift($departmentShiftId: Long, $departmentId: Long, $color: String,$icon: String,$startTime: String,$endTime: String,$label: String,$staffCoreTypeIds: [Long]) {
  
    updateDepartmentShift(
      departmentShiftId:$departmentShiftId
    departmentId: $departmentId
    color:$color
    icon: $icon
    startTime: $startTime
    endTime: $endTime
    label:$label
    staffCoreTypeIds: $staffCoreTypeIds
      ) {
        departmentShiftId
      }
    
    }`
export const CREATE_DEPARTMENT_SHIFTS = gql `mutation createDepartmentShift( $departmentId: Long, $color: String,$icon: String,$startTime: String,$endTime: String,$label: String, $staffCoreTypeIds: [Long]) {
  
      createDepartmentShift(
     
      departmentId: $departmentId
      color:$color
      icon: $icon
      startTime: $startTime
      endTime: $endTime
      label:$label
      staffCoreTypeIds: $staffCoreTypeIds
        ) {
          departmentShiftId
        }
      
      }`

export const CREATE_SCHEDULE_LAYOUT = gql `mutation createScheduleLayout($departmentId: Long, $shiftPlanningStartDate: String,$scheduleStartDate: String,$scheduleLength: String,$shiftPlanningPhaseLength: String,$makeStaffAvailabilityDeadLineLength: String,$maxQuota: String,$staffCoreTypes:[Long],$shiftTypes: [Long],$autoAddProfessionalsToLayout: Boolean) {
  
      createScheduleLayout(
      departmentId: $departmentId
      shiftPlanningStartDate:$shiftPlanningStartDate
      scheduleStartDate: $scheduleStartDate
      scheduleLength: $scheduleLength
      shiftPlanningPhaseLength: $shiftPlanningPhaseLength
      makeStaffAvailabilityDeadLineLength:$makeStaffAvailabilityDeadLineLength
      maxQuota:$maxQuota
      staffCoreTypes:$staffCoreTypes
      shiftTypes:$shiftTypes
      autoAddProfessionalsToLayout:$autoAddProfessionalsToLayout
        ) {
          scheduleLayoutId
        }
      
      }`

export const UPDATE_SCHEDULE_LAYOUT = gql `mutation updateScheduleLayout($scheduleLayoutId: Long!,$departmentId: Long, $shiftPlanningStartDate: String,$scheduleStartDate: String,$scheduleLength: String,$shiftPlanningPhaseLength: String,$makeStaffAvailabilityDeadLineLength: String,$maxQuota: String,$staffCoreTypes:[Long],$shiftTypes: [Long],$autoAddProfessionalsToLayout: Boolean) {
  
  updateScheduleLayout(
        scheduleLayoutId: $scheduleLayoutId
        departmentId: $departmentId
        shiftPlanningStartDate:$shiftPlanningStartDate
        scheduleStartDate: $scheduleStartDate
        scheduleLength: $scheduleLength
        shiftPlanningPhaseLength: $shiftPlanningPhaseLength
        makeStaffAvailabilityDeadLineLength:$makeStaffAvailabilityDeadLineLength
        maxQuota:$maxQuota
        staffCoreTypes:$staffCoreTypes
        autoAddProfessionalsToLayout:$autoAddProfessionalsToLayout
        shiftTypes:$shiftTypes
          ) {
            scheduleLayoutId
          }
        
        }`

export const GET_SCHEDULE_LAYOUT_BY_ID = gql `query findScheduleLayoutById($scheduleLayoutId: Long!) {
        findScheduleLayoutById(scheduleLayoutId:$scheduleLayoutId){
          scheduleLayoutId
          departmentId
          shiftPlanningStartDate
          scheduleStartDate
          shiftPlanningPhaseLength
          scheduleLength
          makeStaffAvailabilityDeadLineLength
          autoAddProfessionalsToLayout
          maxQuota
          publishedOn
          scheduleQuota {
            scheduleLayoutQuotaId
            scheduleLayoutId
            staffCoreTypeId
            quota
            staffCoreTypeName
            shiftTypeId
            ShiftStartTime
            ShiftEndTime
            ShiftTypeName
            
          }
        }
      }`

export const UPDATE_SCHEDULE_LAYOUT_QUOTA = gql `mutation updateScheduleLayoutQuota($scheduleLayoutQuotaId: Long, $scheduleLayoutId: Long,$staffCoreTypeId: Long,$quota: Long,$shiftTypeId: Long) {
  
        updateScheduleLayoutQuota(
          scheduleLayoutQuotaId: $scheduleLayoutQuotaId
          scheduleLayoutId:$scheduleLayoutId
          staffCoreTypeId: $staffCoreTypeId
          quota: $quota
          shiftTypeId: $shiftTypeId
          ) {
            scheduleLayoutId
          }
        
        }`
export const DELETE_SCHEDULE_LAYOUT_QUOTA = gql `mutation deleteScheduleLayout($scheduleLayoutId: Long) {
  
  deleteScheduleLayout(
    scheduleLayoutId:$scheduleLayoutId
            )
          
          }`
export const GET_STAFF_BY_WORKSPACE_AND_AVAILABLE_TO_WORK = gql `query getStaffByWorksiteAndAvailableToWork($workspaceId: Long!,$onDate: String,$staffUserCoreTypeId: Long) {
            getStaffByWorksiteAndAvailableToWork(workspaceId:$workspaceId,onDate:$onDate,staffUserCoreTypeId:$staffUserCoreTypeId){
              workspaceId
              userWorkspaceId
              userId
              workspaceName
              workspaceType
              fteStatus
              hours
              hiredOn
              staffUserCoreTypeName
              userInformation{
                firstName
                lastName
                profilePhoto
              }
            }
          }`
export const GET_STAFF_BY_WORKSPACE_AND_NOT_AVAILABLE_TO_WORK = gql `query getStaffByWorksiteAndNotAvailableToWork($workspaceId: Long!,$onDate: String,$staffUserCoreTypeId: Long) {
  getStaffByWorksiteAndNotAvailableToWork(workspaceId:$workspaceId,onDate:$onDate,staffUserCoreTypeId:$staffUserCoreTypeId){
              workspaceId
              userWorkspaceId
              userId
              workspaceName
              workspaceType
              fteStatus
              hours
              hiredOn
              staffUserCoreTypeName
              userInformation{
                firstName
                lastName
                profilePhoto
              }
            }
          }`
export const UPDATE_OPENSHIFTS = gql `mutation updateOpenShifts($userId: Long, $openShiftId: Long,$isAccepted: Boolean,$isApproved: Boolean,$status: String) {
  
            updateOpenShifts(
              userId: $userId
              openShiftId:$openShiftId
              isAccepted: $isAccepted
              isApproved: $isApproved
              status: $status
              ) {
                openShiftId
              }
            
            }`
export const GET_REQUESTS_BY_TYPE_AND_WORKSPACE = gql `query getRequestsByTypeAndWorkspace($requestTypeId: [Long]!,$workspaceId: Long!) {
              getRequestsByTypeAndWorkspace(requestTypeId:$requestTypeId, workspaceId:$workspaceId){
                requestId
                worksiteId
                worksiteName
                departmentId
                requestTypeId
                requestTypeName
                userId
                onDate
                shiftIds
                shiftName
                colleagueId
                notes
                status 
                worksite {
                  name
                  address
                  city
                  state
                  country
                }
                shiftType {
                  startTime
                  endTime
                  label
                }
                userWorkspaceInformation{
                  userId
                  workspaceType
                  workspaceName
                  staffUserCoreTypeName
                  userInformation {
                    userId
                    firstName
                    lastName
                    profilePhoto
                  }
                  fteStatus
                }
                        }
                      }`
export const GET_A_REQUEST_BY_ID = gql `query getARequestById($requestId: Long!) {
                        getARequestById(requestId:$requestId){
                                      requestId
                                      worksiteId
                                      worksiteName
                                      departmentId
                                      requestTypeId
                                      requestTypeName
                                      userId
                                      onDate
                                      shiftIds
                                      shiftName
                                      colleagueId
                                      notes
                                      status
                                      worksite {
                                        name
                                        address
                                        city
                                        state
                                        country
                                      }
                                      shiftType {
                                        departmentShiftId
                                        departmentId
                                        color
                                        icon
                                        startTime
                                        endTime
                                        label
                                        }
                                      userWorkspaceInformation{
                                        userId
                                        workspaceType
                                        workspaceName
                                        staffUserCoreTypeId
                                        staffUserCoreTypeName
                                        userInformation {
                                          userId
                                          firstName
                                          lastName
                                          profilePhoto
                                        }
                                        fteStatus
                                      }
                                              }
                                            }`

export const DELETE_SHIFT = gql `mutation deleteShiftEvent($userId: Long, $onDate: [String], $departmentId: Long,$requestId: Long) {
  
              deleteShiftEvent(userId: $userId, onDate: $onDate, departmentId: $departmentId,requestId:$requestId)
                          
                          }`
export const DELETE_SHIFT_AND_CREATE_OPENSHIFT = gql `mutation deleteShiftAndCreateOpenShift($userId: Long, $onDate: [String], $departmentId: Long,$requestId: Long) {
  
  deleteShiftAndCreateOpenShift(userId: $userId, onDate: $onDate, departmentId: $departmentId,requestId:$requestId)
              
              }`
export const GET_ALL_STAFF_INSIGHTS_BY_FILTERS = gql `query findAllStaffMembersByDepartmentsAndFilterBy($departmentId: Long!, $onDate: String, $shiftId: Long,$filterBy: String!) {
                findAllStaffMembersByDepartmentsAndFilterBy(departmentId:$departmentId, onDate:$onDate, shiftId:$shiftId,filterBy:$filterBy){
                  label
                  numberOfStaff
                  filteredUsers {
                    userId
                    firstName
                    lastName
                    profilePhoto
                    userWorkspace {
                      departmentShiftIds 
                      isChargeRole
                    }
                    shiftTypeByDepartmentId(departmentId:$departmentId) {
                      label
                      startTime
                      endTime
                    }
                  }                   
                }
                }`
export const VERIFY_CONFLICTS = gql `query verifyConflicts($userId: Long!, $departmentId: Long, $onDate: String) {
  verifyConflicts(userId: $userId, departmentId: $departmentId, onDate: $onDate){
    scheduleId
    worksiteName	
    shiftDate
    startTime
    endTime                   
                  }
                  }`
export const GET_STAFF_BY_ROLE_AND_SCHEDULEDATE = gql `query getStaffByRoleAndScheduleDate($staffUserCoreTypeId: Long, $onDate: String, $workspaceId: Long) {
  getStaffByRoleAndScheduleDate(staffUserCoreTypeId:$staffUserCoreTypeId,scheduleDate:$onDate,workspaceId:$workspaceId){
    userId
    staffUserCoreTypeName
    userInformation{
      firstName
      lastName
    }
    lastFlex(departmentId:$workspaceId)
    shiftTime(departmentId:$workspaceId, date: $onDate)
    fteStatus
                    }
                  }`
export const GET_STAFF_BY_VOLUNTARYLOWCENSUS = gql `query getStaffByVoluntaryLowCensus($staffUserCoreTypeId: Long, $scheduleDate: String, $workspaceId: Long) {                    
  getStaffByVoluntaryLowCensus(staffUserCoreTypeId:$staffUserCoreTypeId, scheduleDate:$scheduleDate, workspaceId: $workspaceId){
                      userId
                      userInformation{
                        firstName
                        lastName
                      }
                      fteStatus
                      joinedDate
                      workspaceName
                      status
                      staffUserCoreTypeName
                      lastFlex(departmentId:$workspaceId)
                      shiftTime(departmentId:$workspaceId, date: $scheduleDate)
                    }
                  }`



export const GET_SCHEDULE_BY_USER_AND_SELECT_DAY = gql `query getScheduleByUserIdAndSelectedDay($userId: Long, $selectedDate: String) {
  getScheduleByUserIdAndSelectedDay(userId:$userId,selectedDate:$selectedDate){
    scheduleId
    shiftDate
    worksiteName  
    departmentName
    shiftTypeName
    departmentName
    voluntaryLowCensus
    worksiteId
    isOnCallRequest
    startTime
    endTime
    staffCoreTypeName
    eventType
    }
  }`
  export const FIND_ALL_STAFF_MEMBERS = gql `query findAllStaffMembers($name: String, $email: String, $phone: String, $staffUserCoreTypeIds: [Long], $organizationId: Long, $firmType:String) {                    
    findAllStaffMembers(name:$name, email:$email, staffUserCoreTypeIds:$staffUserCoreTypeIds, organizationId:$organizationId, phone: $phone, firmType:$firmType){
                                          userId
                                          firstName
                                          lastName
                                          gender
                                          email
                                          phone
                                          profilePhoto
                                          address1
                                          address2
                                          staffUserCoreTypeName
                                          staffUserSubCoreTypeName
                                          workspacesBasedOnOrganizationId(organizationId:$organizationId) {
                                            userWorkspaceId
                                          }
                                      }
                                    }`
      export const FIND_ALL_LAW_FIRMS = gql `query searchLawFirm($name: String!) {
        searchLawFirm(name:$name){
          name
          businessId
          address
          address2
          city
          state
          country
          postalCode
                                          }
                                        }`

        export const FIND_PREFERRED_LAW_FIRMS = gql `query searchPreferredLawFirmsByLawFirmId($lawFirmId:Long ,$name: String!) {
        searchPreferredLawFirmsByLawFirmId(lawFirmId:$lawFirmId ,name:$name){
          name
          businessId
          address
          address2
          city
          state
          country
          postalCode
                                          }
                                        }`

          export const FIND_ALL_FACILITIES = gql `query searchFacilities($name: String, $zipcode: String) {
            searchFacilities(
              name:$name,
              zip:$zipcode
              ){
                businessId
                name
                state
                postalCode
                phoneNumber
                address
                address2
                email
              }
            }`

export const UPDATE_A_SCHEDULE = gql `mutation updateASchedule($scheduleId: Long,$voluntaryLowCensus: Boolean) {
  updateASchedule(
    scheduleId:$scheduleId,
    voluntaryLowCensus:$voluntaryLowCensus
    ) {
      scheduleId
        }
    }`
export const FIND_USER_PRIVACY_SETTINGS_BY_USERID = gql `query findUserPrivacySettingsByUserId($userId: Long!,) {
  findUserPrivacySettingsByUserId(userId:$userId){
    userPrivacySettingId
    userId
    isVisibleToPublic
    isVisibleToWorkspace
    isVisibleToCollegues
  }
}`
export const CREATE_USER_PRIVACY_SETTINGS = gql `mutation createUserPrivacySettings($userId: Long!, $isVisibleToPublic: Boolean,$isVisibleToWorkspace: Boolean,$isVisibleToCollegues: Boolean) {
  
  createUserPrivacySettings(
    userId: $userId
    isVisibleToPublic:$isVisibleToPublic
    isVisibleToWorkspace: $isVisibleToWorkspace
    isVisibleToCollegues: $isVisibleToCollegues
    ) {
      userPrivacySettingId
    }
  
  }`
export const UPDATE_USER_PRIVACY_SETTINGS = gql `mutation updateUserPrivacySettings($userPrivacySettingId: Long!,$userId: Long, $isVisibleToPublic: Boolean,$isVisibleToWorkspace: Boolean,$isVisibleToCollegues: Boolean) {
  
    updateUserPrivacySettings(
      userId: $userId
      isVisibleToPublic:$isVisibleToPublic
      isVisibleToWorkspace: $isVisibleToWorkspace
      isVisibleToCollegues: $isVisibleToCollegues
      ) {
        userPrivacySettingId
      }
    
    }`

export const GET_WORK_SITE_SETTINGS_BY_USERID = gql `query getWorksiteSettingsByUserId($userId: Long!) {
      getWorksiteSettingsByUserId(userId:$userId){
        organizationDetails{
          name
          address
          }
        worksiteDetails{
          name
          businessId
          address
        }
        departmentDetails{
          departmentTypeName
        }
        color
        } 
      }`


export const CREATE_GENERAL_AVAILABILITY = gql `mutation createGeneralAvailability( $userId: Long!, $startDate: String, $endDate: String, $startTime: String, $endTime: String  ) {
  createGeneralAvailability (
    userId:$userId,
    startTime:$startTime,
    endTime:$endTime,
    startDate:$startDate,
    endDate:$endDate
  ){
    generalAvailabilityId
  }
  }`
export const FIND_SCHEDULE_LAYOUT_BY_USERID = gql `query  findScheduleLayoutByUserId($userId: Long!,) {                    
    findScheduleLayoutByUserId(userId:$userId){
      scheduleLayoutId
      scheduleStartDate
      departmentName
      departmentId
      scheduleEndDate
      makeStaffAvailabilityDeadLine
      shiftNames
      businessName
      status
      statusByUserId(userId:$userId)
    }
  }`

export const CREATE_AVAILABILITY = gql `mutation createAvailability( $userId: Long!, $scheduleLayoutId: Long, $onDate: [String] ) {
  createAvailability (
    userId:$userId,
    scheduleLayoutId:$scheduleLayoutId,
    onDate:$onDate, 
  ){
    availabilityId
  }
  }`
export const FIND_USER_NOTIFICATIONS_BY_USERID = gql `query findUserNotificationByUserId($userId: Long!,) {                    
        findUserNotificationByUserId(userId:$userId){
          userNotificationId
          notificationTypeId
          notificationTypeName
          isEnablePush
          isEnableSMS
          isEnableEmail
        }
      }`
export const CREATE_USER_NOTIFICATION = gql `mutation createUserNotification($userId: Long!,$notificationTypeId: Long, $isMuteAllEnable: Boolean,$isEnablePush: Boolean,$isEnableSMS: Boolean, $isEnableEmail: Boolean) {
  
        createUserNotification(
          userId: $userId
          notificationTypeId:$notificationTypeId
          isMuteAllEnable:$isMuteAllEnable
          isEnablePush: $isEnablePush
          isEnableSMS: $isEnableSMS
          isEnableEmail: $isEnableEmail
          ) {
            userNotificationId
          }
        
        }`
export const CREATE_USER_EDUCATION = gql `mutation createUserEducation($userId: Long!,$school: String!, $degreeTypeId: String,$degreeOfStudy: String!,$graduationDate: String!, $location: String,$state:String) {
  
          createUserEducation(
            userId: $userId
            school:$school
            degreeTypeId:$degreeTypeId
            degreeOfStudy: $degreeOfStudy
            graduationDate: $graduationDate
            location: $location
            state:$state
            ) {
              userEducationId
            }
          
          }`
export const UPDATE_USER_EDUCATION = gql `mutation updateUserEducation($userEducationId:Long!,$userId: Long,$school: String, $degreeTypeId: String,$degreeOfStudy: String,$graduationDate: String, $location: String,$state:String) {
  
            updateUserEducation(
              userEducationId:$userEducationId
              userId: $userId
              school:$school
              degreeTypeId:$degreeTypeId
              degreeOfStudy: $degreeOfStudy
              graduationDate: $graduationDate
              location: $location
              state:$state
              ) {
                userEducationId
              }
            
            }`
export const FIND_ALL_USER_WORK_EDUCATION_BY_USERID = gql `query  findAllUserEducationByUserId($userId: Long!) {                    
    findAllUserEducationByUserId(userId:$userId){
      userEducationId
      userId
      school
      degreeTypeId
      degreeTypeName
      degreeOfStudy
      graduationDate
      location
      state
      }
      }`
export const FIND_USER_EDUCATION_BY_ID = gql `query  findUserEducationByUserEducationId($userEducationId: Long) {                    
        findUserEducationByUserEducationId(userEducationId:$userEducationId){
          userEducationId
          userId
          school
          degreeTypeId
          degreeOfStudy
          graduationDate
          location
          state
          }
          }`

export const CREATE_USER_WORKEXPERIENCE = gql `mutation createUserWorkExperience($userId: Long,$facilityName: String, $location: String,$facilityType: String,$startDate: String, $endDate: String,$positionTitle:String,$unit:String,$description:String,$isCurrentlyWorking:Boolean) {
  
  createUserWorkExperience(
    userId: $userId
    facilityName:$facilityName
    location:$location
    facilityType: $facilityType
    startDate: $startDate
    endDate: $endDate
    positionTitle: $positionTitle
    unit:$unit
    description:$description
    isCurrentlyWorking:$isCurrentlyWorking
    ) {
        userWorkExperienceId
      }
              
              }`
export const UPDATE_USER_WORKEXPERIENCE = gql `mutation updateUserWorkExperience($userWorkExperienceId:Long!, $userId: Long,$facilityName: String, $location: String,$facilityType: String,$startDate: String, $endDate: String,$positionTitle:String,$unit:String,$description:String,$isCurrentlyWorking:Boolean) {
  
  updateUserWorkExperience(
    userWorkExperienceId:$userWorkExperienceId
    userId: $userId
    facilityName:$facilityName
                location:$location
                facilityType: $facilityType
                startDate: $startDate
                endDate: $endDate
                positionTitle: $positionTitle
                unit:$unit
                description:$description
                isCurrentlyWorking:$isCurrentlyWorking
                ) {
                  userWorkExperienceId
                }
              }`
export const FIND_ALL_USER_WORK_EXPERIENCE_BY_USERID = gql `query  findAllUserWorkExperienceByUserId($userId: Long!) {                    
  findAllUserWorkExperienceByUserId(userId:$userId){
    userWorkExperienceId
    userId
    facilityName
    location
    facilityType
    startDate
    endDate
    positionTitle
    unit
    description
    isCurrentlyWorking
    }
    }`
export const FIND_USER_WORK_EXPERIENCE_BY_ID = gql `query  findUserWorkExperienceByUserWorkEperienceId($userWorkExperienceId: Long) {                    
      findUserWorkExperienceByUserWorkEperienceId(userWorkExperienceId:$userWorkExperienceId){
        userWorkExperienceId
        userId
        facilityName
        location
        facilityType
        startDate
        endDate
        positionTitle
        unit
        description
        travelAssignment
        isCurrentlyWorking
        }
        }`
export const CREATE_USER_CREDENTIAL = gql `mutation createUserCredentials($userId: Long,$credentialIcon: String, $credentialName: String,$credentialTypeId: Long,$credentialSubTypeId: Long, $expirationDate: String,$credentialStatusId:Long,$licenseNumber:String,$frontFilePhoto:String,$backFilePhoto:String,$state:String,
  $issuer: String,$dateOfBirth: String,$issueDate: String,$accessionID: String,$trainingCenterName: String,$trainingCenterID: String,$instructorID: String,$businessActivity: String,$examinationName: String,$isCompactLicense:Boolean) {
  
      createUserCredentials(
        userId: $userId
        credentialName:$credentialName
        credentialTypeId:$credentialTypeId
        credentialSubTypeId: $credentialSubTypeId
        expirationDate: $expirationDate
        credentialStatusId: $credentialStatusId
        licenseNumber: $licenseNumber
        frontFilePhoto:$frontFilePhoto
        backFilePhoto:$backFilePhoto
        state:$state
        issuer: $issuer
        dateOfBirth: $dateOfBirth
        issueDate: $issueDate
        accessionID: $accessionID
        trainingCenterName: $trainingCenterName
        trainingCenterID: $trainingCenterID
        instructorID: $instructorID
        businessActivity: $businessActivity
        examinationName: $examinationName
        isCompactLicense:$isCompactLicense
        credentialIcon:$credentialIcon
       
        ) {
          userCredentialId
          }
                  
                  }`
export const UPDATE_USER_CREDENTIAL = gql `mutation updateUserCredentials($userCredentialId: Long,$userId: Long,$credentialIcon: String, $credentialName: String,$credentialTypeId: Long,$credentialSubTypeId: Long, $expirationDate: String,$credentialStatusId:Long,$licenseNumber:String,$frontFilePhoto:String,$backFilePhoto:String,$state:String,
  $issuer: String,$dateOfBirth: String,$issueDate: String,$accessionID: String,$trainingCenterName: String,$trainingCenterID: String,$instructorID: String,$businessActivity: String,$examinationName: String,$isCompactLicense:Boolean,$isPending:Boolean, $isVerified:Boolean) {

  updateUserCredentials(
    userCredentialId: $userCredentialId
    userId: $userId
    credentialName:$credentialName
    credentialTypeId:$credentialTypeId
    credentialSubTypeId: $credentialSubTypeId
    expirationDate: $expirationDate
    credentialStatusId: $credentialStatusId
    licenseNumber: $licenseNumber
    frontFilePhoto:$frontFilePhoto
    backFilePhoto:$backFilePhoto
    state:$state
    issuer: $issuer
    dateOfBirth: $dateOfBirth
    issueDate: $issueDate
    accessionID: $accessionID
    trainingCenterName: $trainingCenterName
    trainingCenterID: $trainingCenterID
    instructorID: $instructorID
    businessActivity: $businessActivity
    examinationName: $examinationName
    isCompactLicense:$isCompactLicense
    credentialIcon:$credentialIcon
    isVerified:$isVerified
    isPending: $isPending
    ) {
      userCredentialId
      }
              
              }`
export const FIND_ALL_USER_CREDENTIALS_BY_USERID = gql `query  findAllUserCredentialsByUserId($userId: Long!) {                    
      findAllUserCredentialsByUserId(userId:$userId){
        userCredentialId
        userId
        credentialIcon
        credentialName
        credentialTypeId
        credentialSubTypeId
        credentialSubTypeName
        credentialType
        expirationDate
        credentialStatus
        licenseNumber
        frontFilePhoto
        backFilePhoto
        state
        issuer
        dateOfBirth
        issueDate
        accessionID
        trainingCenterName
        trainingCenterID
        instructorID
        businessActivity
        examinationName
        isCompactLicense
        isVerified 
        verifiedBy 
        verifiedOn 
        isPending 
        fileName
        isRequired
        isGenerated
        }
        }`
export const FIND_USER_CREDENTIAL_BY_ID = gql `query  findUserCredentailById($userCredentialId: Long!) {                    
  findUserCredentailById(userCredentialId:$userCredentialId){
    userCredentialId
    userId
    credentialIcon
    credentialName
    credentialSubTypeName
    credentialType
    expirationDate
    credentialStatus
    licenseNumber
    frontFilePhoto
    backFilePhoto
    state
    isCompactLicense
    credentialTypeId
    credentialSubTypeId
    fileName
    isRequired
    }
    }`



export const GET_ALL_REQUESTS_BY_USER_ID = gql `query getAllRequestsByUserId($userId: Long, $requestTypeId: Long) {
  getAllRequestsByUserId(userId:$userId,requestTypeId:$requestTypeId){
    departmentId
    worksiteName  
    worksiteColor
    status
    onDate
    departmentName
    requestTypeId
    requestTypeName
    
    }
  }`


export const GET_WORK_SITE_DETAILS_BY_USERID = gql `query getWorksiteSettingsByUserId($userId: Long!) {
    getWorksiteSettingsByUserId(userId:$userId){
      organizationDetails{
        organizationId
        name
        address
        businessesByUserId(userId:$userId){
          businessId
          name
          worksiteColor(userId:$userId)
          address
          departmentByUserId(userId:$userId){
            departmentTypeName
            departmentId
            fteStatusOfStaffUser(userId:$userId)
            staffRoleByUserId(userId:$userId)
            description
          }
        }
      }
      }
    }`
export const GET_CREDENTIAL_SUB_TYPE_BY_ID = gql `query  getCredentialSubTypesByCredentialTypeId($credentialTypeId: Long!,$organizationId: Long) {                    
      getCredentialSubTypesByCredentialTypeId(credentialTypeId:$credentialTypeId,organizationId: $organizationId){
        credentialSubTypeId
        credentialTypeId
        credentialTypeName
        label
        credentialFieldLabels{
          text
          value
        }
        }
        }`

export const GET_CREDENTIAL_SUB_TYPE_BY_CREDENTIAL_AND_CORETYPE_ID_AND_ORG_ID = gql `query  getCredentialSubTypesByCredentialTypeAndCoreTypeIdAndOrganizationId($credentialTypeId: Long!,$staffCoreTypes: Long, $organizationId: Long) {                    
  getCredentialSubTypesByCredentialTypeAndCoreTypeIdAndOrganizationId(credentialTypeId:$credentialTypeId,staffCoreTypes:$staffCoreTypes, organizationId: $organizationId){
    credentialSubTypeId
    credentialTypeId
    credentialTypeName
    label 
    acronym
    requiredType {
      staffCoreTypeName
      staffCoreTypeId
      isRequired
      }
      credentialFieldLabels{
        text
        value
      }  
      organizationId
      creatorId
    }
    
    }`
export const GET_WORKSPACES_BY_USERID = gql `query  getWorkspaceByUserId($userId: Long!) {                    
  getWorkspaceByUserId(userId:$userId){
    userWorkspaceId
    businessId
    workspaceName
    organizationName
    staffUserCoreTypeName
    staffUserSubCoreTypeName
    fteStatus
    worksites {
      businessId
      name
      address
      department{
        departmentTypeName
      }
    }
    userAvailability {
      weekDay
      type
    }
    }
    }`
export const GET_WORKSITE_SETTINGS_BY_USERID = gql `query  getWorksiteSettingsByUserId($userId: Long!) {                    
      getWorksiteSettingsByUserId(userId:$userId){
         organizationDetails{
           name
         }
          worksiteDetails{
            name
            businessId
          }
          departmentDetails{
            departmentTypeName
            fteStatusOfStaffUser(userId:$userId)
            address
          }
          color
          userId
          }
        
        }`
export const GET_WORKSITE_SETTINGS_BY_USERID_AND_WORKSITEID = gql `query  getWorksiteSettingByUserIdAndWorksiteId($userId: Long!,$worksiteId:Long!) {                    
  getWorksiteSettingByUserIdAndWorksiteId(userId:$userId,worksiteId:$worksiteId){
      organizationDetails{
        name
        logo
      }
      worksiteDetails{
        name
        businessId
        address
        city
        state
        postalCode
        country
        description
      }
      departmentDetails{
        departmentTypeName
        fteStatusOfStaffUser(userId:$userId)
        address
        address2
        colleagues {
          userId
          firstName
          lastName
          staffUserCoreTypeName
          profilePhoto
        }
        staffRoleByUserId(userId:$userId)
      }
      color
      userId
      }
    
    }`
export const GET_OPENSHIFTS_BY_USERID = gql `query  getOpenShiftsByUserId($userId: Long!) {                    
      getOpenShiftsByUserId(userId:$userId){ 
        openShiftId
        worksiteDetails{
          coverPhoto
        }
        organization{
          logo
        }
        colleaguesInWorksite{
          firstName
          lastName
          profilePhoto
        }
        shiftType {
          label
          endTime
          startTime
        }
        onDate
        staffUserName
        worksiteAddress
        departmentName
        startTime
        endTime
        openShiftCoreTypeName
        conflictShifts {
          scheduleId
        }
          }
        
        }`

export const GET_OPENSHIFT_DETAILS_BY_ID = gql `query  getOpenShiftDetailsByOpenShiftId($openShiftId: Long!) {                    
  getOpenShiftDetailsByOpenShiftId(openShiftId:$openShiftId){
  openShiftId
  worksiteName
  worksiteAddress
  departmentName
  onDate
  staffUserName
  organization{
    logo
  }
  shiftType {
    label
    endTime
    startTime
  }
  startTime
  endTime

  colleaguesInWorksite{
    firstName
    lastName
    profilePhoto
  }
  worksiteDetails {
    description
  }
  conflictShifts {
    scheduleId
  }
    }
  
  }`


export const CREATE_A_REQUEST = gql `mutation createARequest($departmentId: Long!, $userId: Long, $onDate: [String], $worksiteId: Long, $requestTypeId: Long, $notes: String  ) {
  
    createARequest(
       userId:  $userId,
      departmentId: $departmentId
      onDate:$onDate
      worksiteId:$worksiteId
      requestTypeId: $requestTypeId
      notes: $notes 
      ) { 
       requestId 
        }
                
  }`

export const SET_SCHELDULE_LAYOUT = gql `mutation createSetScheduleLayout($worksiteId: Long, $departmentId: Long, $startDate: String, $scheduleLength: String, $roles: [Long], $shiftTypes: [Long], $weekOffDays: [String], $input: [StaffWeekOffsInput]) {
  
    createSetScheduleLayout(
      worksiteId:$worksiteId
      departmentId: $departmentId
      startDate: $startDate
      scheduleLength: $scheduleLength
      shiftTypes:$shiftTypes
      roles:$roles
      weekOffDays: $weekOffDays,
      input: $input
      ) { 
        setScheduleLayoutId 
        worksiteId
        }
                
  }`

export const GET_STAFF_DETAILS = gql `query getStaffByStaffUserCoreTypeIdsAndShiftTypesAndDepartmentId($departmentId: Long, $staffCoreTypeIds: [Long], $shiftTypes: [Long], $organizationId: Long) {
  
    getStaffByStaffUserCoreTypeIdsAndShiftTypesAndDepartmentId(
      departmentId: $departmentId
      staffCoreTypeIds: $staffCoreTypeIds
      shiftTypes: $shiftTypes
      )
        {
          userId
          firstName
          lastName
          profilePhoto
          staffUserCoreTypeNameByDepartmentId(departmentId:$departmentId)
          workspacesBasedOnOrganizationId(organizationId: $organizationId) {
            departmentShifts {
              departmentShiftId
            departmentId 
            color 
            icon 
            startTime 
            endTime 
            label 
            } 
          }
        }


  }`

export const GET_SCHEDULE_DETAILS = gql `query getSetScheduleLayoutById($setScheduleLayoutId: Long, $departmentId: Long) {
  
    getSetScheduleLayoutById(
      setScheduleLayoutId: $setScheduleLayoutId,
      )
        {
          scheduleLength
          startDate
          roleTypes {
            id
            label
          }
          shiftTypes {
            departmentShiftId
            label
          }
          weekOffDays
          staffWeekOffs{
            staffSetSchedules {
              shiftTypeId
              staffWeekOffDays
            }
            userDetails{
              userId
              firstName
              lastName
              profilePhoto
              staffUserCoreTypeNameByDepartmentId(departmentId:$departmentId)
            }
          }
        }
  }`

export const GET_SCHELDULE_LAYOUT = gql `query getSetScheduleLayoutsByDepartmentId ($departmentId: Long) {
  
    getSetScheduleLayoutsByDepartmentId (
      departmentId: $departmentId
      ) 
      {
        setScheduleLayoutId
        setScheduleLength
        shiftTypes{
          label
        }
        staffWeekOffs{
          userId
        }
        roleTypes{
          label
        }
        
      }
  }`


export const UPDATE_SET_SCHEDULE_LAYOUT = gql `mutation updateSetScheduleLayout($setScheduleLayoutId: Long, $scheduleLength: String, $startDate: String, $roles: [Long], $shiftTypes: [Long], $input: [StaffWeekOffsInput], $weekOffDays: [String]) {
  
    updateSetScheduleLayout(
      setScheduleLayoutId:$setScheduleLayoutId
      scheduleLength: $scheduleLength
      startDate: $startDate,
      shiftTypes:$shiftTypes,
      weekOffDays: $weekOffDays,
      roles:$roles
      input: $input
    ) {
      setScheduleLayoutId
      startDate
    }
            
  }`

export const CHECK_DUPLICATES_SET_SCHEDULE = gql `query checkDuplicateSetScheduleLayoutsByStaffCoreTypeIdsAndDepartmentId($departmentId: Long, $shiftTypes: [Long], $staffCoreTypeIds: [Long],
    $scheduleStartDate: String, $scheduleLength: String) {
  
    checkDuplicateSetScheduleLayoutsByStaffCoreTypeIdsAndDepartmentId(
      departmentId: $departmentId
      shiftTypes:$shiftTypes,
      staffCoreTypeIds: $staffCoreTypeIds,
      startDate: $scheduleStartDate,
      scheduleLength: $scheduleLength
    ) {
      userId
      firstName
      lastName
    }
            
  }`

export const CHECK_DUPLICATES_SCHEDULE_LAYOUT = gql `query checkDuplicateScheduleLayout($departmentId: Long, $shiftTypes: [Long], $staffCoreTypes: [Long],
    $scheduleStartDate: String) {
  
      checkDuplicateScheduleLayout(
      departmentId: $departmentId
      shiftTypes:$shiftTypes,
      staffCoreTypes: $staffCoreTypes,
      scheduleStartDate: $scheduleStartDate,
    ) {
      scheduleLayoutId
    }
            
  }`

export const DELETE_SET_SCHEDULE_LAYOUT = gql `mutation deleteSetScheduleLayout($setScheduleLayoutId: Long) {
  
    deleteSetScheduleLayout(
      setScheduleLayoutId:$setScheduleLayoutId
    )
            
  }`

export const DELETE_USER_CREDENTIALS = gql ` mutation DELETE_USER_CREDENTIALS($userCredentialId: Long!, ) {
  
  deleteUserCredentials(userCredentialId:$userCredentialId)

  }`;
export const CREATE_CLIENT_PROFILE = gql `mutation createClient($organizationId:Long, $businessId: Long,$firstName: String, $lastName: String,
    $dateOfBirth: String,$phoneNumber: String, $medicareNumber: String, $medicaidNumber: String, $martialStatus: String,
    $religion: String, $ethnicity: String,$language:String,$status:String,$household:[HouseholdInput]) {
  
      createClient(
      organizationId:$organizationId
      businessId: $businessId
      firstName:$firstName
      lastName:$lastName,
      dateOfBirth:$dateOfBirth
      phoneNumber:$phoneNumber
      medicareNumber:$medicareNumber
      medicaidNumber:$medicaidNumber
      martialStatus:$martialStatus
      religion:$religion
      ethnicity:$ethnicity
      language:$language
      status:$status
      household:$household
      ) {
        clientId
                  }
    }`

export const UPDATE_CLIENT_PROFILE = gql `mutation updateClient($clientId:Long, $organizationId:Long, $businessId: Long,$firstName: String, $lastName: String,
      $dateOfBirth: String,$phoneNumber: String, $medicareNumber: String, $medicaidNumber: String, $martialStatus: String,
      $religion: String, $ethnicity: String,$language:String,$status:String,$household:[HouseholdInput]) {
    
        updateClient(
          clientId:$clientId
        organizationId:$organizationId
        businessId: $businessId
        firstName:$firstName
        lastName:$lastName,
        dateOfBirth:$dateOfBirth
        phoneNumber:$phoneNumber
        medicareNumber:$medicareNumber
        medicaidNumber:$medicaidNumber
        martialStatus:$martialStatus
        religion:$religion
        ethnicity:$ethnicity
        language:$language
        status:$status
        household:$household
        ) {
          clientId
                    }
      }`
export const GET_CLIENTS_BY_BUSINESSID = gql `query getClientsByBusinessId ($businessId: Long) {

  getClientsByBusinessId (
    businessId: $businessId
    ) 
    {
      clientId
      firstName
      lastName
      dateOfBirth
      age
      profilePhoto
      phoneNumber
      medicareNumber
      medicaidNumber
      martialStatus
      religion
      ethnicity
      language
      status
      household {
        address
        address2
      }
      familyContacts {
        firstName
        lastName
      }
    }
}`
export const GET_CLIENT_PROFILE_BY_ID = gql `query getClientProfileById ($clientId: Long) {

  getClientProfileById
   (
    clientId: $clientId
    ) 
    {
      clientId
      firstName
      lastName
      dateOfBirth
      age
      profilePhoto
      phoneNumber
      medicareNumber
      medicaidNumber
      martialStatus
      religion
      ethnicity
      language
      status
      household {
        address
        address2
        email
        state
        country
        zip
        phoneNumber
        longitude
        latitude
      }
      familyContacts {
        firstName
        lastName
      }
      assignmentSchedules {
        assignmentScheduleId
        assignmentId
        staffUserCoreTypeName
        acuityLevel
        weekDay
        startTime
        endTime
        weekDay
        staffMembers {
          firstName
          lastName
          address1
          address2
          profilePhoto
          
        }
      }
    }
}`
export const DELETE_CLIENT = gql ` mutation deleteClientProfile($clientId: Long!) {
  
  deleteClientProfile(clientId:$clientId)

  }`;
export const GET_CLIENTS_BY_BUSINESS_ID = gql ` query getClientsByBusinessId($businessId: Long! ) {
  
    getClientsByBusinessId(businessId: $businessId){
      clientId
      organizationId
      businessId
      firstName
      lastName
      dateOfBirth
      phoneNumber
      medicareNumber
      medicaidNumber
      martialStatus
      religion
      ethnicity
      language
      status
      age
      assignmentSchedules {
        assignmentId
      }
      }
  
    }`;
export const CREATE_ASSIGNMENT = gql ` mutation createAssignment($businessId:Long,$clientId:Long,$startDate: String,$endDate: String ) {
  
        createAssignment(businessId: $businessId,clientId:$clientId,startDate: $startDate
          endDate: $endDate){
          assignmentId
          clientId
          status
          clientInformation{
            clientId
            ethnicity
          }
        }
    
      }`;
export const UPDATE_ASSIGNMENT = gql ` mutation updateAssignment($assignmentId:Long,$clientId:Long,$startDate: String,$endDate: String ) {
  
        updateAssignment(assignmentId: $assignmentId,clientId:$clientId,startDate: $startDate
          endDate: $endDate){
          assignmentId
          clientId
          status
          clientInformation{
            clientId
            ethnicity
          }
        }
    
      }`;
export const GET_ASSIGNMENTS_BY_BUSINESS_ID = gql ` query getAssignmentsByBusinessId($businessId:Long ) {
  
      getAssignmentsByBusinessId(businessId:$businessId){
        assignmentId
        clientInformation{
          firstName
          lastName
          dateOfBirth
          clientId
          age
          profilePhoto
        }
        businessInformation{
          name
        }
        status
      }
    
}`;
export const FIND_ALL_STAFF_USER_CORE_TYPES = gql ` query findAllStaffUserCoreTypes {
  
  
  findAllStaffUserCoreTypes{
    id 
    numberOfStaff
    label
      }

}`;
export const FIND_SUB_ROLE_TYPE_BY_STAFF_USER_CORE_TYPES_ID = gql ` query findSubRoleTypesByStaffUserCoreTypeId ($parentId: Long) {
  
  
  findSubRoleTypesByStaffUserCoreTypeId (parentId: $parentId){
              id
              parentId
            label
            
      }

}`;
export const GET_STAFF_MEMBERS_BY_STAFF_USER_CORE_TYPE_ID_AND_BUSINESS_ID_AND_STARTTIME_AND_ENDTIME = gql ` query  getStaffMembersByStaffUserCoreTypeIdAndBusinessIdAndStartTimeAndEndTime ($businessId:Long, $staffUserCoreTypeId:Long,$clientId:Long,$assignmentSchedules:[assignmentSchedulesInput]) {
  getStaffMembersByStaffUserCoreTypeIdAndBusinessIdAndStartTimeAndEndTime (businessId:$businessId, staffUserCoreTypeId: $staffUserCoreTypeId,clientId:$clientId,assignmentSchedules:$assignmentSchedules){
    userId
    distance(
      clientId: $clientId
      )
    userInformation{
      firstName
      lastName
      profilePhoto
    }
    staffUserCoreTypeName
    fteStatus
  }

}`;
export const CREATE_ASSIGNMENT_SCHEDULES = gql `mutation createAssignmentSchedules($assignmentId: Long
  $assignmentScheduleList: [AssignmentSchedulesInput]){
    createAssignmentSchedules(assignmentId: $assignmentId
      assignmentScheduleList: $assignmentScheduleList){
     
    assignmentScheduleId
    assignmentId
    staffCoreTypeId
    acuityLevel
    subCoreTypeId
    weekDay
    startTime
    endTime
    staff
  }

}`;
export const GET_ASSIGNMENTS_SCHEDULES_BY_ID = gql `query getAssignmentsSchedulesById($assignmentScheduleId: Long){
  getAssignmentsSchedulesById(assignmentScheduleId: $assignmentScheduleId){
    assignmentId
    staffUserCoreTypeName
    subCoreTypeName
    staffCoreTypeId
    acuityLevel
    assignmentInvitees{
      inviteeDetails{
        fteStatus
        userInformation{
          firstName
          lastName
          profilePhoto
          userId
          
        }
      }
      isAccepted
      isApproved
      distance
    }
    listOfStartTimeAndEndTimeByRole{
      startTime
      endTime
      weekDay
    }
  }

}`;
export const GET_ASSIGNMENTS_BY_ID = gql `query getAssignmentById($assignmentId: Long)

{
  getAssignmentById(assignmentId:$assignmentId){
    assignmentId
    businessId
    clientId
    startDate
    endDate
    duration
    staffUserCoreTypeNameByUserId
    clientInformation{
      firstName
      lastName
      profilePhoto
      dateOfBirth
      medicareNumber
      medicaidNumber
      martialStatus
      phoneNumber
      religion
      ethnicity
      language
      household{
        address
        address2
        state
        country
        phoneNumber
        email
         longitude
        latitude
      }
    }
    schedulesByDate{
      scheduleDate
      listOfUsers{
        userId
        firstName
        lastName
        profilePhoto
        staffUserCoreTypeName
      }
      startTime
      endTime
    }
    assignmentSchedules{
      weekDay
      staffCoreTypeId
      assignmentScheduleId
      assignmentId
      startTime
      endTime
      staffUserCoreTypeName
      subCoreTypeName
      acuityLevel
      staffMembers {
        userId
        firstName
        lastName

        
      }
    }
    staffDetails{
      	isAccepted
      	isApproved
        staffId
        distance
      	inviteeDetails{
          	userInformation{
          	firstName
            lastName
            
          }
          staffUserCoreTypeName
          fteStatus
        }
      }
  }

}`;
export const UPDATE_ASSIGNMENT_INVITEE = gql `mutation updateAssignmentInvitee($assignmentId: Long,$userId:Long,$isApproved:Boolean){
  updateAssignmentInvitee(assignmentId:$assignmentId,userId:$userId,isApproved:$isApproved)
      {
        assignmentInviteeId
        assignmentId
      }
}`;
export const DELETE_ASSIGNMENT_SCHEDULE_BY_ASSIGNMENT_ID_AND_STAFFCORETYPEID = gql `mutation deleteAssignmentScheduleByAssignmentIdAndStaffCoreTypeId($assignmentId: Long,$staffUserCoreTypeId:Long){
  deleteAssignmentScheduleByAssignmentIdAndStaffCoreTypeId(assignmentId: $assignmentId,staffUserCoreTypeId:$staffUserCoreTypeId)
}`;

export const DELETE_ASSIGNMENT = gql `mutation deleteAssignment($assignmentId: Long){
  deleteAssignment(assignmentId: $assignmentId)
}`;
export const FINALIZE_ASSIGNMENT = gql `mutation finalizeAssignment($assignmentId: Long){
  finalizeAssignment (assignmentId: $assignmentId){
    assignmentId
    }
}`;

export const CHECK_DUPLICATE_ASSIGNMENTS_BY_START_AND_END_DATE_AND_STAFFCORETYPE_ID = gql ` query checkDuplicateAssignmentsByStartDateAndEndDateAndBusinessIdAndStaffCoreTypeId ($startDate: String,$endDate: String,$businessId:Long,$staffCoreTypeId: Long) {
  checkDuplicateAssignmentsByStartDateAndEndDateAndBusinessIdAndStaffCoreTypeId (startDate: $startDate,endDate: $endDate,businessId:$businessId,staffCoreTypeId: $staffCoreTypeId)
}`;
export const CREATE_CREDENTIALS_SUBTYPES = gql `mutation createCredentialSubTypes( $credentialSubTypeId:Long, $organizationId:Long, $credentialTypeId:Long, $label: String, $states:  [String] ,  $requiredTypeInput :  [requiredTypeInput], $credentialType : String, $creatorId: Long, $status : String, $acronym : String, $inputFieldSetKeys : [String] ) {

  createCredentialSubTypes(credentialSubTypeId: $credentialSubTypeId, organizationId:$organizationId, credentialTypeId:$credentialTypeId, label: $label, states:$states,   requiredTypeInput: $requiredTypeInput,  credentialType: $credentialType, creatorId: $creatorId, status: $status, acronym: $acronym, inputFieldSetKeys: $inputFieldSetKeys )  {
    credentialSubTypeId
  }
}`;
export const GET_CREATE_CREDENTIALS_SUBTYPES_BY_ORGANIZATIONID = gql ` query getCredentialSubTypesByOrganizationId($organizationId:Long ) {
  
  getCredentialSubTypesByOrganizationId(organizationId:$organizationId){
    credentialSubTypeId
    credentialTypeId
    credentialTypeName
    states 
    label
    acronym
    organizationId
    creatorId
    requiredType {
      staffCoreTypeName
      staffCoreTypeId
      isRequired
      }
      credentialFieldLabels{
        text
        value
      }  
  }

}`;

export const GET_CREDENTIALS_SUBTYPES_BY_CREDENTIAL_SUBTYPE_ID = gql ` query getCredentialSubTypesByOrganizationId($credentialSubTypeId:Long, ) {
  
  getCredentialSubTypesById(credentialSubTypeId:$credentialSubTypeId){
    
    inputFormFieldSetKeys
  }

}`;
export const DELETE_CREDENTIAL_SUB_TYPES = gql `mutation deleteCredentialSubTypes($credentialSubTypeId: Long) {
  
  deleteCredentialSubTypes(
    credentialSubTypeId:$credentialSubTypeId
  )
          
}`

export const CREATE_USER_DIPLOMA = gql `mutation createUserDiploma( $userDiplomaId:Long, $userId:Long, $issuedDate:Date, $expirationDate: Date, $documentNumber:  String ,$frontFilePhoto:  String,$fileName:  String,$backFilePhoto:  String, $state:  String ) {

createUserDiploma( userDiplomaId: $userDiplomaId, userId:$userId, issuedDate:$issuedDate, expirationDate:$expirationDate, documentNumber:$documentNumber,frontFilePhoto:$frontFilePhoto,fileName:$fileName,backFilePhoto:$backFilePhoto, state:$state)  {
  userDiplomaId
  }
}`


export const GET_DIPLOMALIST_BY_ID = gql ` query findListOfDiplomaByUserId($userId: Long!) {

  findListOfDiplomaByUserId(userId:$userId) {
    userDiplomaId
    userId 
    issuedDate
    expirationDate
    documentNumber
    frontFilePhoto
    fileName
    state
    backFilePhoto
      
    }
  
  }`


export const GET_RERENCELIST_BY_ID = gql ` query findListOfReferencesByUserId($userId: Long!) {

  findListOfReferencesByUserId(userId:$userId) {
    userId 
    referenceId 
    name 
    jobTitle 
    phoneNumber 
    emailAddress  
    }
  
  }`

export const CREATE_REFERENCE = gql `mutation createReference($referenceId: Long, $userId: Long,  $name: String, $jobTitle: String, $phoneNumber: String, $email: String ) {
 
    createReference(referenceId: $referenceId,  userId: $userId, name: $name, jobTitle :$jobTitle, phoneNumber: $phoneNumber, email:$email )  {
      referenceId
    }
  }`


export const DELETE_REFERENCES = gql ` mutation deleteReferences($referenceId: Long!) {
  
  deleteReferences(referenceId:$referenceId)

  }`


export const DELETE_EDUCATION = gql ` mutation deleteUserEducation($userEducationId: Long!) {
  
  deleteUserEducation(userEducationId:$userEducationId)

  }`

export const DELETE_WORKEXPERIENCE = gql ` mutation deleteUserWorkExperience($userWorkExperienceId: Long!) {
  
    deleteUserWorkExperience(userWorkExperienceId:$userWorkExperienceId)
  
    }`


export const DELETE_DIPLOMA = gql ` mutation deleteUserDiploma($userDiplomaId: Long!) {
  
    deleteUserDiploma(userDiplomaId:$userDiplomaId)
  
    }`;

export const GET_EHRSYSTEMS = gql `
query {
  findAllEhrSystems {
    ehrSystemId
    label
  }
}`;
export const GET_CREDENTIAL_SUB_TYPES_BY_STATUS = gql ` query  {

  getCredentialSubTypesByStatus  {
    credentialSubTypeId
    credentialTypeId
    credentialTypeName
    states 
    label
    credentialType
    removedFromOrganizations
    status
    organizationId
    organizationName
    creatorId
    requiredType {
      staffCoreTypeName
      staffCoreTypeId
      isRequired
      }
      credentialFieldLabels{
        text
        value
      }
      inputFormFieldSetKeys  
  }
  
  }`;



export const GET_USERS_NOT_PART_OF_ANY_ORGANIZATION = gql ` query  {

  findUsersNotPartOfAnyOrganizations  {
    userId 
    organizationId 
    firstName 
    lastName 
    middleName 
    gender 
    email 
    password 
    defaultPassword 
    preferredName 
    address1 
    address2  
    city 
    state 
    phone 
    primaryContactCountryCode 
    profilePhoto
    title
    userTypeId
    userTypeName
    status
dateOfBirth 
staffUserCoreTypeName
staffUserSubCoreTypeName
  }
  
  }`;


export const GET_USER_PERMISSIONS_BY_USER_ID = gql ` query findUserPermissionsByUserId($userId: Long!) {

    findUserPermissionsByUserId(userId:$userId) { 
      userId
      accessLevel
      departmentIds{
        organizationId
        worksiteId
        departmentId
      }
      departmentLabels{
        departmentId
        departmentTypeName
        worksiteId
      }
      worksiteIds{
        organizationId
        worksiteId
      }
      worksiteLabels{
        businessId
        name
      }
      permissionSet{
        featureId
        label
        permissions{
          read
          create
          delete
          edit
        }
      } 

    }
    
  }`;

export const CREATE_USER_PERMISSIONS = gql `mutation createUserPermissions( $userId: Long, $organizationId: Long, $accessLevel: String, $departments: [DepartmentsInput], 
    $worksites: [WorksitesInput], $permissionSet: [PermissionSetInput]) {
 
    createUserPermissions( userId: $userId, organizationId:$organizationId, accessLevel: $accessLevel, departments :$departments, worksites:$worksites, permissionSet: $permissionSet)  {
      userId
    }
  }`;

export const GET_ALL_BUSINESS_BY_ORGANIZATION_ID = gql ` query findAllBusinesses($organizationId: Long!) {

    findAllBusinesses(organizationId:$organizationId) {
      businessId
      name
      address
      address2
      city
      state 
      postalCode
      country
    }
  
  }`;

export const GET_ALL_DEPARTMENTS_BY_BUSINESS_IDS = gql ` query findDepartmentsByBusinessId($businessId: [Long]) {

    findDepartmentsByBusinessId(businessId:$businessId) {
      departmentId
      departmentTypeName
      description
      businessId
    }
  
  }`;

export const VALIDATE_USER__DEPARTMENT_SHIFT_ID = gql ` query validateUserDepartmentShiftId($userId: Long, $departmentShiftId: Long) {

    validateUserDepartmentShiftId(userId:$userId, departmentShiftId:$departmentShiftId) {
      activeSchedules{
        scheduleId
        departmentId
        shiftDate
      }
      activeScheduleLayouts{
        scheduleLayoutId
        shiftPlanningEndDate
        scheduleEndDate
      }
      activeRequests{
        requestId
      }
    }
  
  }`;

export const VALIDATE_USER__DEPARTMENT = gql ` query validateUserDepartment($userId: Long, $departmentId: Long) {

    validateUserDepartment(userId:$userId, departmentId:$departmentId) {
      activeSchedules{
        scheduleId
        departmentId
        shiftDate
      }
      activeScheduleLayouts{
        scheduleLayoutId
        shiftPlanningEndDate
        scheduleEndDate
      }
      activeRequests{
        requestId
      }
    }
  
  }`;

// Manage Referrals



export const CREATE_PATIENTS = gql `mutation createAPatient($patientId:Long,$organizationId:Long,$businessId:Long,$firstName: String, $lastName: String, $gender:String, $dateOfBirth:String, $emailAddress: String, $phoneNumber: String,  
    $address1: String, $address2: String, $city:String, $state:String, $country:String, $zip: String, $pcpIds:[Long],$healthInsuranceInput:HealthInsuranceInput, $guardianObj:GuardianObjInput, $maritalStatus:String, $driverLicense:String, $language:[String], $ssnKey:String, $driversLicenseState:String,$attorneyName:String, $lawFirmName:String,
    $createdBy:Long, $addedFirmType: String
    ) {
      createAPatient(
        patientId:$patientId,
        organizationId:$organizationId,
        businessId:$businessId,
      firstName:$firstName,
      lastName:$lastName,
      gender:$gender,
     dateOfBirth:$dateOfBirth,
      phoneNumber:$phoneNumber,
      emailAddress:$emailAddress,
      address1:$address1,
      address2:$address2,
      city:$city,
      state:$state,
      country:$country,
      zip:$zip,
pcpIds:$pcpIds,
healthInsuranceInput:$healthInsuranceInput,
guardianObj:$guardianObj,
ssnKey:$ssnKey,
driverLicense:$driverLicense,
maritalStatus:$maritalStatus,
language:$language,
driversLicenseState:$driversLicenseState,
attorneyName:$attorneyName,
lawFirmName:$lawFirmName,
createdBy:$createdBy,
addedFirmType: $addedFirmType
      ) {
          patientId
          }
      }`;




// Search Patients
export const SEARCH_PATIENTS = gql `query findGlobalPatientsByNameAndEmailAndPhone($name: String, $email: String, $phone: String ) {
  findGlobalPatientsByNameAndEmailAndPhone(name:$name, email:$email, phone: $phone ){
    patientId
    firstName
    lastName
    gender
    emailAddress
    phoneNumber
    guardianObj{
      guardianFirstName
      guardianLastName
      relationship
    }
    address1
    address2

    
}
}`;

// View Patients
export const GET_PATIENTS_BY_ID = gql `query findPatientById($patientId:Long) {
        findPatientById(patientId:$patientId){
          
            patientId
            firstName
            lastName
            gender
            dateOfBirth
            emailAddress
            phoneNumber
            state
            city
            country
            latitude
            longitude
            zip
            address1
            address2
            lastUpdated
            guardianObj{
              guardianFirstName
              guardianLastName
              relationship
            }
            primaryCarePhysician{
              userId
              firstName
              lastName
              staffUserCoreTypeName
              staffUserSubCoreTypeName
            }
            pcpIds
            pcps{
              userId
              firstName
              lastName
              staffUserCoreTypeName
              staffUserSubCoreTypeName
              staffUserSubCoreTypeId
            }
            referrals{
              referralId
              referralTo{
                userId
                firstName
                lastName
                staffUserSubCoreTypeName
              }
              status
              totalNotes
              patientId
              businessDetails{
                organizationId
                address
                address2
                city
                state
                postalCode
              }
            }
            healthInsurance{
              insuranceId
              insuranceName
              memberPolicyId
              insuranceAuthrizationDocument
            }
            phiDocument
            ssnKey
            maritalStatus
            driverLicense
            driversLicenseState
            language
            clientNumber
         
        }
      }`;

// View All
export const FIND_ALL_PATIENTS = gql `query findAllPatients($organizationId: Long) {
        findAllPatients(organizationId:$organizationId){
          
            patientId
            firstName
            lastName
            gender
            dateOfBirth
            emailAddress
            phoneNumber
            state
            city
            country
            zip
            address1
            address2
            primaryCarePhysician{
              firstName
              lastName
            }
            guardianObj{
              guardianFirstName
              guardianLastName
              relationship
            }
            pcpIds
            pcps{
              firstName
              lastName
              staffUserCoreTypeName
              staffUserSubCoreTypeName
              staffUserSubCoreTypeId

            }
            casesCountByClientId
        }
      }`;
// Create PCP
export const CREATE_PCP = gql `mutation createUserBasicInformation($firstName: String, $lastName: String,$phone: String, $email: String,$organizationId:Long,$address1:String, $address2:String,$city:String, $state:String, $country:String, $postalCode:String, $gender:String,
   
        ) {
          createUserBasicInformation(
          firstName:$firstName,
          lastName:$lastName,
          gender:$gender,
          address1:$address1,
          address2:$address2,
          phone:$phone,
          email:$email,
          city:$city,
          state:$state,
          country:$country,
          postalCode:$postalCode,
          organizationId:$organizationId,
          userTypeId:3,
          staffUserCoreTypeId:1,
          staffUserSubCoreTypeId:180,
         
                   ) {
              userId
            
              
              }
          }`;

// Delete PCP
export const DELETE_PCP = gql ` mutation deletePcpAndProvidersFromPatients($patientId: Long, $staffId:Long) {
            deletePcpAndProvidersFromPatients(patientId:$patientId, staffId:$staffId)
          }`;
// Delete Health Insurance
export const DELETE_HEALTH_INSURANCE = gql ` mutation deleteHealthInsurancesFromPatients($patientId: Long, $insuranceId:Long) {
            deleteHealthInsurancesFromPatients(patientId:$patientId, insuranceId:$insuranceId)
          }`;

// Create PCP
export const CREATE_OFFICE_ADMIN_DETAILS = gql `mutation createUserBasicInformation($firstName: String, $lastName: String,$phone: String, $email: String,$organizationId:Long,$address1:String,
        ) {
          createUserBasicInformation(
          firstName:$firstName,
          lastName:$lastName,
          address1:$address1,
          phone:$phone,
          email:$email,
          organizationId:$organizationId,
          userTypeId:3,
          staffUserCoreTypeId:8,
          staffUserSubCoreTypeId:180,
                   ) {
              userId
            
              
              }
          }`;

// UPDATE PCP
export const UPDATE_PCP = gql `mutation updateUserBasicInformation($userId:Long!,$firstName: String, $lastName: String,$phone: String,$email: String,$organizationId:Long,$address1:String, $address2:String, $city:String, $state: String, $country:String, $postalCode:String,
            $gender:String,$dateOfBirth:String,$staffUserCoreTypeId:Long,$staffUserSubCoreTypeId:Long
                ) {
                  updateUserBasicInformation(
                    organizationId:$organizationId,
                    userId:$userId,
                    firstName:$firstName,
                    lastName:$lastName,
                    phone:$phone,
                    email:$email,
                    address1:$address1,
                    address2:$address2,
                    city:$city,
                    state: $state,
                    country:$country,
                    postalCode:$postalCode,
                    gender:$gender,
                    dateOfBirth:$dateOfBirth,
                    staffUserCoreTypeId:$staffUserCoreTypeId
                    staffUserSubCoreTypeId:$staffUserSubCoreTypeId
                    
                    ) {
                        userId
                        }
                    }`


// Search PCP
export const SEARCH_PCP = gql `query findAllPcpByNameAndEmailAndPhone($name: String, $email: String, $phone: String, $isPcp: Boolean) {
            findAllPcpByNameAndEmailAndPhone(name:$name, email:$email, phone: $phone, isPcp: $isPcp){
              userId
              firstName
              lastName
              email
              phone
              staffUserCoreTypeName
              staffUserSubCoreTypeName
              address1
              address2
              organizationDetails{
                organizationId
                name
              }
              
          }
          }`;
// View PCP'S
// organizationDetails{
//   organizationId
//   name
//   phoneNumber
//   address
//   email
//    officeAdminDetails{
//      firstName
//      lastName
//      email
//      address1
//    }
//  }

export const GET_PCP_BY_NAME = gql ` query findUsersById($userId: Long!) {

            findUsersById(userId:$userId) {
              userId
              firstName
              lastName
              gender
              email
              phone
              city 
              state
              country
              address1
              address2
              postalCode
              title
              staffUserCoreTypeId
              staffUserCoreTypeName
              staffUserSubCoreTypeId  
              staffUserSubCoreTypeName
              organizationDetails{
                organizationId
                name
              }
           
              

             }
            
            
            }`;

// View HEALTH INSURANCES
export const GET_HEALTH_INSURANCES = gql `query findAllInsurances{
                findAllInsurances{
    id
    label
                }
              }`;

// find organization by name

export const FIND_ORGANIZATION_BY_NAME = gql ` query findAllOrganizations {
  
  
    findAllOrganizations{
      organizationId
  name
  email
  address
  phoneNumber
  accountOwners{
    firstName
    lastName
    
  }
     
        }
  
  }`;
export const CREATE_REFERRALS = gql `mutation createAReferral($referralId:Long, $patientId:Long, $partnerId: Long, $specialityTags: [String], $roleId:Long, $subRoleId: Long, $distance: String, $ethnicity:String,  
    $gender: String, $languages: String, $startTime:String, $endTime:String, $isPreferred:Boolean, $from: Long, $to: Long, $status: String, $organizationId: Long, $isReferralSent: Boolean,
    $referralType:String, $scanType:Long, $scanCode:String, $caseId:Long, $attachments:[String], $fromBusinessId: Long, $toBusinessId:Long, $lawFirmStatus: String, $icdDiagnosisCodeIds:[Long], $isAuthorizedByProvider:Boolean) {
      createAReferral(
      referralId:$referralId,  
      patientId:$patientId,
      partnerId:$partnerId,
      specialityTags:$specialityTags,
      roleId:$roleId,
      subRoleId:$subRoleId,
      distance:$distance,
      ethnicity:$ethnicity,
      gender:$gender,
      languages:$languages,
      startTime:$startTime,
      endTime:$endTime,
      isPreferred:$isPreferred,
      from:$from,
      to:$to,
      status:$status,
      organizationId:$organizationId,
      isReferralSent:$isReferralSent,
      fromBusinessId:$fromBusinessId,
      toBusinessId:$toBusinessId,
      referralType:$referralType,
      scanType:$scanType,
      scanCode:$scanCode,
      caseId:$caseId,
      attachments:$attachments,
      lawFirmStatus: $lawFirmStatus,
      icdDiagnosisCodeIds:$icdDiagnosisCodeIds,
      isAuthorizedByProvider:$isAuthorizedByProvider
      ) {
          referralId
          }
      }`;

export const DELETE_REFERRAL = gql ` mutation deleteAReferral($referralId: Long!) {
    deleteAReferral(referralId:$referralId)
  }`;

export const FIND_ALL_CREDENTIAL_FIELDS = gql ` query findAllCredentialFields {
  
    findAllCredentialFields{
      key
      label
      dataType
      watermark
      required
        }
  
  }`;

export const GET_USERS_BY_WORKSITE_ID = gql ` query getUsersByWorksiteId($worksiteId: Long) {

    getUsersByWorksiteId(worksiteId:$worksiteId) {
      userId
      firstName
      lastName
    }
  
  }`;

export const GET_REFERRAL_BY_ID = gql `query findReferralById($referralId: Long) {
   
    findReferralById(referralId:$referralId){
      referralType
       referralId
       referralDate
       patientId
       providerId
       businessId
       languages
       gender
       referralDate
       lopDocument
       from
       to
       totalNotes
       status
       lawFirmStatus
       patientInformation{
         firstName
         lastName
         dateOfBirth
         gender
         emailAddress
         phoneNumber
         address1
         address2
         gender
         guardianObj{
           guardianFirstName
           guardianLastName
           relationship
         }
         healthInsurance{
           insuranceId
           insuranceName
           memberPolicyId
           insuranceAuthrizationDocument
         }
         pcps{
           firstName
           lastName
           middleName
         }
       }
       referralTo{
        userId
        firstName
        lastName
        middleName
        email
        phone
        staffUserSubCoreTypeName
        secondaryPhoneNumber
        preferredProviderInWorksite
        address1
         address2
       }
       referralFrom{
        firstName
        lastName
        middleName
       }
       attorneyDetails{
         firstName
         lastName
       }
       caseId
       toBusinessDetails{
businessId
name
address
phoneNumber
email
       }
    }

  }`;

export const CREATE_A_MESSAGE = gql `mutation createAMessage($messageId: Long, $text: String,  $messageTime: String, $senderId: Long, $groupId: Long, $type: String, $sourceId: Long, $firmType: String, $caseId: Long, $referralId: Long){

    createAMessage(
      messageId: $messageId,
      text: $text,
      messageTime: $messageTime,
      senderId: $senderId,
      groupId: $groupId,
      type: $type,
      sourceId: $sourceId,
      firmType: $firmType,
      caseId:$caseId
      referralId:$referralId
    ){
      messageId
      messageTime
      senderId
      groupId
      senderInformation{
        userId
      }
      isSeenByGroupMembers{
        userId
        seenTime
      }
    }
  }`;
export const GET_ALL_INBOUND_REFERRALS_BY_PROVIDERID = gql ` query findInboundReferrals($providerId: Long!) {

    findInboundReferrals(providerId:$providerId) {
      referralId
      referralDate
      totalNotes
      patientInformation{
        patientId
        firstName
        lastName
      }
      referralTo{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       referralFrom{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       caseId
       unreadNotesForUser
    }
  
  }`;

  export const GET_ALL_INBOUND_REFERRALS_BY_BUSINESSID = gql ` query findInboundReferralsByBusinessId($businessId: Long!) {

    findInboundReferralsByBusinessId(businessId:$businessId) {
      referralId
      referralDate
      totalNotes
      patientInformation{
        patientId
        firstName
        lastName
      }
      referralTo{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       referralFrom{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       caseId
       unreadNotesForUser
       lawFirmStatus
       status
    }
  
  }`;
export const GET_ALL_OUTBOUND_REFERRALS_BY_PROVIDERID = gql ` query findOutboundReferrals($providerId: Long!) {

    findOutboundReferrals(providerId:$providerId) {
      referralId
      referralDate
      totalNotes
      patientInformation{
        patientId
        firstName
        lastName
      }
      referralTo{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       referralFrom{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       unreadNotesForUser
    }
  
  }`;
  export const GET_ALL_OUTBOUND_REFERRALS_BY_BUSINESSID = gql ` query findOutboundReferralsByBusinessId($businessId: Long!) {

    findOutboundReferralsByBusinessId(businessId:$businessId) {
      referralId
      referralDate
      totalNotes
      patientInformation{
        patientId
        firstName
        lastName
      }
      referralTo{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       referralFrom{
        firstName
        lastName
        middleName
        staffUserCoreTypeName
       }
       unreadNotesForUser
       status
    }
  
  }`;
export const FIND_NOTE_GROUP_BY_ID = gql `query findNoteGroupById($noteGroupId: Long, $loggedInUserId: Long, $referralId: Long){
    findNoteGroupById(noteGroupId: $noteGroupId, loggedInUserId:$loggedInUserId, referralId:$referralId){
      groupId
      memberIds
      memberInformation{
        firstName
        lastName
        middleName
      }
      patientId
      patientInformation{
        firstName
        lastName
      }
      groupMessages{
        messageId
        text
        messageTime
        senderId
        groupId
        attachments
        type
        senderInformation{
          firstName
          lastName
          middleName
        }
        isSeenByGroupMembers{
          userId
          seenTime
        }
      }
    }
  }`;



//View Provider Listings
export const GET_PROVIDER_LISTING_BY_BUSINESS_ID = gql `query getProviderListingByBusinessId($businessId:Long) {
  getProviderListingByBusinessId(businessId:$businessId){    
    userId
    organizationId
    firstName
    lastName    
    gender
    staffUserSubCoreTypeName
    staffUserCoreTypeName
    phone
    email
    age
    address1
    address2
    city
    state
    country
    practices{
      businessId
    }
    referralCount
  }
}`;
export const GET_PROVIDER_LISTING_BY_ORG_ID = gql `query getProviderListingByOrganizationId($organizationId:Long, $businessId:Long) {
  getProviderListingByOrganizationId( organizationId:$organizationId, businessId:$businessId){    
    userId
    firstName
    lastName    
    gender
    staffUserSubCoreTypeName
    staffUserCoreTypeName
    phone
    email
    age
    dateOfBirth
    address1
    address2
    city
    state
    country
    practices{
      businessId
      name
      preferredProviderIds
    }
    referralCount 
    preferredProviderInWorksite

  }
}`;
export const GET_PROVIDERS_BY_ORG_ID = gql `query getProvidersInWorkspace($organizationId:Long) {
  getProvidersInWorkspace( organizationId:$organizationId){    
    userId
    firstName
    lastName    
    gender
    staffUserSubCoreTypeName
    staffUserCoreTypeName
    phone
    email
    age
    dateOfBirth
    address1
    address2
    city
    state
    country
    practices{
      businessId
      name
      preferredProviderIds
    }
    referralCount 
    preferredProviderInWorksite

  }
}`;
export const FIND_ALL_PROVIDERS_MEMBERS = gql `query findAllStaffMembers($name: String, $email: String, $phone: String, $firmType: String) {                    
  findAllStaffMembers(name:$name, email:$email, phone: $phone, firmType: $firmType){
    userId
    organizationId
    firstName
    lastName
    gender
    email
    phone
    profilePhoto
    address1
    address2
  }
}`;
export const GET_VIEW_PROVIDERS_INFO = gql ` query findUsersById($userId: Long!) {

  findUsersById(userId:$userId) {
    userId
    organizationId
    firstName
    lastName
    gender
    dateOfBirth
    email
    phone
    secondaryPhoneNumber
    preferredProviderInWorksite
    city 
    state
    country
    address1
    address2
    staffUserCoreTypeId
    staffUserSubCoreTypeId
    staffUserCoreTypeName
    staffUserSubCoreTypeName
    staffUserCoreTypeId
    staffUserSubCoreTypeId
    postalCode
    specialities
    workspaces{
      workspaceName
    } 
    organizationDetails{
      organizationId
      name
      accountOwners{
        firstName
        lastName
      }
    }
    practices{
      organizationId
      businessId
      name
      address
      address2
      phoneNumber
      email
    }
   }
  
  
  }`;
export const FIND_ALL_PATIENTS_BY_PROVIDER_ID = gql `query findAllPatientsByProviderId($providerId:Long) {
    findAllPatientsByProviderId(providerId:$providerId){      
      patientId
      firstName
      lastName
      gender
      dateOfBirth
      emailAddress
      phoneNumber
      state
      city
      country
      zip
      address1
      address2
      guardianObj{
        guardianFirstName
        guardianLastName        
      }
      pcps{
        userId
        organizationId
        firstName
        lastName
      }
         
    }
  }`;
// export const GET_PROVIDER_PRACTICES_LISTING_BY_BUSINESS_ID = gql `query getProviderListingByBusinessId($businessId:Long) {
//   getProviderListingByBusinessId(businessId:$businessId){    
//     userId
//     organizationId
//     practices{
//       businessId
//       organizationId
//       name
//       address
//       address2
//       email
//     }
//   }
// }`;


export const FIND_ALL_SPECIALITY_TAGS = gql `query findAllSpecialityTags{
    findAllSpecialityTags{
      id
      specialist
    }
}`;

export const CREATE_PRACTICES = gql `mutation CREATE_BUSINESS($name: String, $email: String, $status: String, $organizationId: Long,$businessTypeId: Long, $businessSubTypeId: Long, $address: String, $address2: String, $city: String, $state: String,$postalCode: String,$country: String, $worksiteAvailabilityInput:[WorksiteAvailabilityInput]) {
  createBusiness(
      name: $name,     
      address: $address,
      address2: $address2,
      city: $city,
      state: $state,
      postalCode: $postalCode,
      country: $country,
      businessTypeId:$businessTypeId,
      businessSubTypeId:$businessSubTypeId,
      worksiteAvailabilityInput:$worksiteAvailabilityInput,
      email:$email,
      organizationId:$organizationId,
      status:$status
  ) {
    organizationId
    businessId
  }
}`
// Search Provider Availability
export const SEARCH_PROVIDER_AVAILABILITY = gql `query findProvidersByDistanceAndLanguageAndGenderAndRoleAndSubRole($name: String, $startTime: String, $endTime: String, $weekDays: [String], $distance: Float, $language: String, $gender: String,
                                        $staffUserCoreTypeId: Long, $subRoleTypeId: Long, $specialityTags: [String], $patientLatitude: String, $patientLongitude: String, $ethnicGroup: String, $isPreferred: Boolean,$postalCode: String ,$staffUserCoreTypeId: Long) {
          findProvidersByDistanceAndLanguageAndGenderAndRoleAndSubRole(name:$name, startTime:$startTime, endTime:$endTime, weekDays: $weekDays, distance: $distance, language: $language, gender: $gender,
            staffUserCoreTypeId: $staffUserCoreTypeId, subRoleTypeId: $subRoleTypeId, specialityTags: $specialityTags, patientLatitude: $patientLatitude, patientLongitude: $patientLongitude, ethnicGroup: $ethnicGroup, isPreferred: $isPreferred,postalCode:$postalCode,staffUserCoreTypeId:$staffUserCoreTypeId){
              userWorkspaceId
              organizationId
              businessId
              userInformation{
              userId
              firstName
              lastName
              gender
              email
              phone
              profilePhoto
              staffUserCoreTypeName
              staffUserSubCoreTypeName
              address1
              address2
              distanceFromPatient
              age
              organizationDetails{
                organizationId
                name
              }
            }
            business{
              businessId
              name
              address
              address2
            }
        }
        }`;

           // Search Preferred Providers
      export const SEARCH_PREFERRED_PROVIDER = gql `query searchPreferredFacilitiesByLawFirmId($zip: String, $lawFirmId:Long, $subCoreTypeId:[Long] ) {
        searchPreferredFacilitiesByLawFirmId(zip:$zip, lawFirmId:$lawFirmId, subCoreTypeId:$subCoreTypeId ){
        userId
        firstName
        lastName
        gender
        email
        phone
        staffUserCoreTypeName
        staffUserSubCoreTypeName
        address1
        address2
        postalCode
        organizationId
        }
        }`;
        


export const FIND_ALL_USERS_BY_USERIDS = gql ` query findAllUsersByIds($userIds: [Long]) {

  findAllUsersByIds(userIds:$userIds) {
    userId
    organizationId
    firstName
    lastName
    gender
    dateOfBirth
    email
    phone
    staffUserCoreTypeName
    staffUserSubCoreTypeName
   }
  }`;

export const UPDATE_USER_ORGANIZATION = gql `mutation UPDATE_USER_ORGANIZATION($userId: Long!,$organizationId: Long, $healthInsurances: [HealthInsurancesInput]) {
    updateUserOrganization(  
            userId: $userId
            organizationId: $organizationId
            healthInsurances: $healthInsurances
    ) {
      organizationId
    }
  }`;

export const FIND_USER_ORG_BY_USERS_AND_ORGID = gql ` query findUserOrganizationByUserIdAndOrganizationId($userId: Long, 
  $organizationId: Long) {

  findUserOrganizationByUserIdAndOrganizationId(userId :$userId, organizationId:$organizationId) {
    userOrganizationId
    userId 
    organizationId  
    staffUserCoreTypeId
    staffUserCoreTypeName 
    healthInsurances{ 
        id 
        label 
    }
    status 
  }
}`;
export const GET_OFFICE_ADMIN_BY_BUS_ID = gql ` query getOfficeAdminsByBusinessId($businessId: Long) {

    getOfficeAdminsByBusinessId(businessId :$businessId) {
      userId
      firstName 
      lastName 
      phone 
      email 
  }
}`;
export const GET_PATIENT_EVENTS_BY_WORKSITEID = gql ` query findAllPatientEventsByWorksiteId($worksiteId: Long) {

  findAllPatientEventsByWorksiteId(worksiteId :$worksiteId) {
    patientEventId,
  patientInformation{
    patientId,
    firstName,
    lastName,
    gender,
    age,
    guardianObj{
      guardianFirstName,
      relationship
    }
  },
  worksiteInformation{
    businessId,
    name,
    address,
    address2
  },
  departmentId,
 
  status,
  visitDate,
  referralNotesCount
  providerInformation{
    firstName,
    lastName,
   userId
  },
  diagnosis,
  attachANote,
attachments

}
}`;

export const GET_PREFERRED_PROVIDERS = gql `query getPreferredProviders($businessId: Long){
    
  getPreferredProviders(businessId: $businessId){
      userInformation{
        userId
        firstName
        lastName
        gender
        email
        phone
        secondaryPhoneNumber
        profilePhoto
        staffUserCoreTypeId
        staffUserSubCoreTypeId
        staffUserCoreTypeName
        staffUserSubCoreTypeName
        address1
        address2
        distanceFromPatient
        preferredProviderInWorksite
        organizationDetails{
          organizationId
          name
        }
      }
     }
}`

// Create Patient Event
export const CREATE_PATIENT_EVENT = gql `mutation createAPatientEvent($patientEventId:Long, $patientId: Long,$departmentId: Long, $worksiteId: Long,$status:String, $providerId:Long, $diagnosis:String, $attachANote:String, $mediaFile:String,$visitDate:String) {
  createAPatientEvent( 
    patientEventId:$patientEventId,
          patientId: $patientId,
          departmentId: $departmentId,
          worksiteId: $worksiteId,
          status:$status,
          providerId:$providerId,
          diagnosis:$diagnosis,
          attachANote:$attachANote,
          mediaFile:$mediaFile,
          visitDate:$visitDate

  ) {
    patientEventId
  }
}`;
export const GET_PATIENT_QUE_BY_WORKSITEID = gql ` query findAllPatientQueByWorksiteId($worksiteId: Long) {

  findAllPatientQueByWorksiteId(worksiteId :$worksiteId) {
    patientEventId,
  patientInformation{
    patientId,
    firstName,
    lastName,
    gender,
    age,
    address1,
    address2,
    phoneNumber,
    emailAddress,
    guardianObj{
      guardianFirstName
      relationship
    }
    primaryCarePhysician{
      userId
    }
  },
  worksiteInformation{
    businessId,
    name,
    address,
    address2
  },
  status,
  visitDate,
  referralNotesCount


}
}`;

export const GET_PATIENT_EVENT_BY_ID = gql ` query findPatientEventById($patientEventId: Long) {

  findPatientEventById(patientEventId :$patientEventId) {
    patientEventId,
  patientInformation{
    patientId,
    firstName,
    lastName,
    gender,
    age,
    dateOfBirth,
    emailAddress,
    address1,
    phoneNumber,
    state,
    city,
    country,
    zip,
    guardianObj{
      guardianFirstName,
      relationship
    }
  },
  attachments,
 worksiteId,
 departmentId,
 providerId,
 attachANote,
 diagnosis
 


}
}`;

export const GET_PATIENT_MEDICAL_EVENT_BY_PATIENT_ID = gql ` query findAllPatientEventsByWorksiteIdAndPatientId($patientId: Long, $worksiteId:Long) {

  findAllPatientEventsByWorksiteIdAndPatientId(patientId :$patientId, worksiteId:$worksiteId) {
    patientEventId,
 visitDate,
 status,
 providerInformation{
   firstName,
   lastName
   staffUserCoreTypeName,
   staffUserSubCoreTypeName
 }
 worksiteInformation{
   name,
   address
 }
 referralNotesCount 

}
}`;
// Delete Attachements in Patient Events
export const DELETE_ATTACHED_FILES = gql ` mutation deleteAttachedFilesFromPatientEvents($patientEventId: Long, $fileName:String) {
  deleteAttachedFilesFromPatientEvents(patientEventId:$patientEventId, fileName:$fileName)
}`;

export const CREATE_A_CLIENTCASE = gql `mutation createAClientCase($clientCaseId:Long, $organizationId: Long,$businessId: Long, $clientId: Long,$attorneys: [AttorneysInput],$caseManagers: [CaseManagersInput],$paralegals: [ParalegalsInput], $createdBy:Long, $caseStatus:String,$medicalRecords:[String], $accidentType:String, $insuranceNumber:String, $policyNumber:String, $policyLimit:String, $noOfPersons:Long, $injuryDate:String, $preferredLanguages:[String], $parentId:Long, $policyNotavilable: Boolean,$createdSource:String, $consultantFirmId:Long
  $insuranceNotavilable:Boolean, $preferredImagingIds:[Long], $preferredPainManagementIds:[Long] ) {
  createAClientCase(
    clientCaseId:$clientCaseId,
    organizationId: $organizationId,
    businessId: $businessId,
    consultantFirmId:$consultantFirmId,
    clientId: $clientId,
    attorneys:$attorneys,
    caseManagers:$caseManagers,
    paralegals:$paralegals,
    createdBy:$createdBy,
    caseStatus:$caseStatus,
    medicalRecords:$medicalRecords,
    accidentType:$accidentType,
    insuranceNumber:$insuranceNumber,
    policyNumber:$policyNumber,
    policyLimit:$policyLimit,
    noOfPersons:$noOfPersons,
    policyLimit:$policyLimit,
    policyNotavilable:$policyNotavilable,
    insuranceNotavilable:$insuranceNotavilable,
    preferredLanguages:$preferredLanguages,
    parentId:$parentId,
    injuryDate: $injuryDate
    createdSource:$createdSource
    preferredImagingIds:$preferredImagingIds
    preferredPainManagementIds:$preferredPainManagementIds

  ) {
    clientCaseId
    __typename
  }
}`;


export const GET_ALL_CLIENT_CASES_BY_BUSINESSID = gql ` query findAllClientCasesByBusinessId($businessId: Long) {

  findAllClientCasesByBusinessId(businessId :$businessId) {
    organizationId,
    clientCaseId,
    businessId,
    caseStatus,
    careTreatmentPlansCount,
    caseNumber,
    attorneys{
      primary,
      __typename
    },
    caseManagers{
      primary,
      __typename
    },
    paralegals{
      primary,
      __typename
    },
    clientDetails{
      patientId,
      firstName,
      lastName,
      gender,
      phoneNumber,
      clientNumber
    }
    createdDate
    createdSource
}
}`;

export const GET_ALL_CLIENT_CASES_BY_CONSULTANT_FIRM_ID = gql ` query findAllClientCasesByConsultantFirmId($consultantFirmId: Long) {
  findAllClientCasesByConsultantFirmId(consultantFirmId :$consultantFirmId) {
    organizationId
    clientCaseId
    attorneys{
      attorneyId
      primary
    },
    caseManagers{
      caseManagerId
      primary
    },
    paralegals{
      paralegalId
      primary
    },
    businessId
    caseStatus
    careTreatmentPlansCount
    caseNumber
    clientDetails{
      patientId
      firstName
      lastName
      gender
      phoneNumber
      clientNumber
    }
    createdDate
    createdSource
    __typename
},
}`;


// Float Legal Referral 
export const FIND_ALL_ICD_CODES = gql ` query findAllIcdDiagnosisCodes($searchText:String) {

  findAllIcdDiagnosisCodes(searchText:$searchText) {
  id,
  code,
  codeId,name,
  label,
    }

}`;
export const FIND_ALL_SCAN_TYPES = gql ` query findAllScanTypes {

  findAllScanTypes {
  scanTypeId,
  label,
    }

}`;
export const FIND_SCAN_TYPE_ID = gql ` query findAllScanCodesByScanTypeIdAndSearchText($parentId:Long, $searchText:String) {

  findAllScanCodesByScanTypeIdAndSearchText(parentId:$parentId,searchText:$searchText) {
  id,
  parentId,
  label,
  code
    }

}`;
export const FIND_REFERRAL_BY_PATIENT_ID = gql ` query findReferralsByPatientId($patientId:Long) {

  findReferralsByPatientId(patientId:$patientId) {
    organizationId,
  referralId,
  patientId,
  patientInformation{
    firstName,
    lastName
  },
  referralFrom{
    firstName,
    lastName
  },
  referralTo{
    firstName,
    lastName,
    staffUserSubCoreTypeName
  },
  referralType,
  status,
  referralDate
    }

}`;

export const FIND_REFERRAL_BY_CASE_ID = gql ` query findReferralsByCaseId($caseId:Long) {

  findReferralsByCaseId(caseId:$caseId) {
    caseId,
    totalNotes,
    organizationId,
    referralId,
  patientInformation{
    firstName,
    lastName,
    patientId
  },
  referralFrom{
    userId,
    firstName,
    lastName
  },
  referralTo{
    userId,
    firstName,
    lastName,
    phone,
    email,
    staffUserSubCoreTypeName
    staffUserSubCoreTypeName,
    organizationId
  },
  referralType,
  status,
  referralDate,
  attorneyDetails{
    firstName,
    lastName
  },
  fromBusinessId,
  toBusinessId,
  toBusinessDetails{
    businessId
    name
  },
  lawFirmStatus,
  careTreatmentPlanDetails{
    careTreatmentPlanId
  }
 
    }

}`;

export const FIND_BY_CASE_ID = gql ` query findByClientCaseId($caseId:Long) {

  findByClientCaseId(caseId:$caseId) {
    organizationId,
    businessId,
    caseNumber,
    clientId,
    caseStatus,
    createdDate,
    createdBy,
    noOfPersons,
    injuryDate,
    preferredLanguages,
    clientCaseId,
    medicalRecords,
    policyNotavilable,
    insuranceNotavilable,
    attorneys{
      attorneyId
      primary
      firstName,
      lastName,
     
    },
    caseManagers{
      caseManagerId
      primary
      firstName,
      lastName,
      
    },
    paralegals{
      paralegalId
      primary
      firstName,
      lastName,
     
    },
    preferredImagingDetails{
      name
      businessId
    },
    preferredPainManagementDetails{
      firstName
      lastName
      email
      phone
      userId
    }
   

  clientDetails{
    patientId,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    emailAddress,
    phoneNumber,
    address1,
    address2,
    city,
    state,
    zip,
    country
  },
  accidentType
  insuranceNumber
  policyNumber
  policyLimit
  lawFirmDetails{
    businessId
    name
    address
    address2
    email
  }
    }

}`;

export const FIND_CARE_TREATMENT_PLAN_BY_ID = gql ` query findCareTreatmentPlanById($careTreatmentPlanId:Long) {

  findCareTreatmentPlanById(careTreatmentPlanId:$careTreatmentPlanId) {
    careTreatmentPlanId
    appointmentType
    timeSlot
    startDate
    endDate
    organizationId
    frequency
    caseId
    createdDate
    status
    notes
  }
}`;

export const FIND_APPOINTMENT_BY_CARE_TREATMENT_PLAN_ID = gql ` query findAppointmentByCareTreatmentPlanId($careTreatmentPlanId:Long) {
findAppointmentByCareTreatmentPlanId(careTreatmentPlanId:$careTreatmentPlanId) {
  referralId
  caseId
  businessId
  organizationId
  appointmentStatus
  appointmentDate
  clientId
}
}`;

export const FIND_CARE_TREATMENT_PLAN_BY_CASE_ID = gql ` query findCareTreatmentPlanByCaseId($caseId:Long) {
  findCareTreatmentPlanByCaseId(caseId:$caseId) {
    careTreatmentPlanId
    frequency
    caseId
    createdDate
    status
    referralDetails {
      referralId
      patientInformation {
        firstName
      }
      referralFrom {
        firstName
      }
      referralTo {
        firstName
        lastName

      }
    }
  }
}`;


export const FIND_BUSINESS_BY_ORGANIZATION_ID = gql ` query findBusinessesByOrganizationId($organizationId:Long) {
  findBusinessesByOrganizationId(organizationId:$organizationId) {
   organizationId
   businessId
    name
    
  }
}`;


export const FIND_CARE_REFERRALS_PROVIDER_ID = gql ` query findCaseReferralsByProviderId($providerId:Long) {
  findCaseReferralsByProviderId(providerId:$providerId) {
    referralId
    patientId
    providerId
    caseId
    referralDate
    status
    patientInformation{
      
      firstName
      lastName
      gender 
      phoneNumber
    }
    referralTo {
      firstName
      lastName

    }  
    referralFrom {
      firstName
      lastName

    }  
  }
}`;
export const CREATE_CARE_TREATMENT_PLAN = gql `mutation createACareTreatmentPlans($careTreatmentPlanId:Long, $selectedDate:String,$organizationId:Long, $selectedWeekDays: [Long] , $notes:String, $businessId:Long, $caseId: Long,$status:String, $createdBy: Long, $referralId: Long, $notes: String,$appointmentType: String,$frequency: Long,$startDate: String, $endDate:String,$timeSlot:String, $files: [String], $parentId:Long) {
  createACareTreatmentPlans(
    careTreatmentPlanId:$careTreatmentPlanId,
      organizationId: $organizationId,
      businessId: $businessId,
      caseId: $caseId,
      createdBy: $createdBy,
      referralId: $referralId,
      status: $status,
      appointmentType: $appointmentType,
      frequency: $frequency,
      startDate: $startDate,
      endDate:$endDate,
      timeSlot: $timeSlot,
      notes: $notes,
      files: $files,
      selectedWeekDays:$selectedWeekDays,
      notes:$notes,
      selectedDate:$selectedDate,
      parentId:$parentId
  ) {
    careTreatmentPlanId
  }
}`;

export const FIND_ALL_CLIENT_CASES_BY_CLIENTID  = gql ` query findAllClientCasesByClientId($clientId:Long) {
  findAllClientCasesByClientId(clientId:$clientId) {
    caseNumber
    createdDate
    caseStatus
    clientCaseId 
  }
}`
export const FIND_APPOINTMENT_BY_CLIENTID  = gql ` query findAppointmentByClientId($clientId:Long) {
  findAppointmentByClientId(clientId:$clientId) {
    appointmentStatus
    appointmentDate
    appointmentId   
  }
}`

export const FIND_BUSINESS_BY_BUSINESS_TYPE_ID = gql ` query findBusinessesByBusinessTypeId($businessTypeId:Long) {
  findBusinessesByBusinessTypeId(businessTypeId:$businessTypeId) {
    name,
    businessId,
    phoneNumber,
    businessType
  }
}`
export const FIND_CARE_TREATMENT_PLAN_BY_REFERRAL_ID = gql ` query findCareTreatmentPlanByReferralId($referralId:Long) {
  findCareTreatmentPlanByReferralId(referralId:$referralId) {
    careTreatmentPlanId
    appointmentType
    selectedDate
    selectedWeekDays
    frequency
    startDate
    endDate
    timeSlot
    notes
    files
    attachments

  }
}`

export const FIND_ALL_ACCIDENT_TYPES = gql ` query findAllAccidentTypes {
  findAllAccidentTypes{
    accidentTypeId
    label

  }
}`

export const FIND_BUSINESS_BY_BUSINESS_TYPE_ID_AND_NAME = gql ` query findBusinessesByBusinessTypeIdAndName($businessTypeId:Long, $name:String) {
  findBusinessesByBusinessTypeIdAndName(businessTypeId:$businessTypeId, name:$name){
  name
  address
  address2
  email
  phoneNumber
  businessType
  businessId

  }
}`
export const FIND_ALL_USERS_BY_NAME = gql ` query findAllUsersByName($name:String) {
  findAllUsersByName(name:$name){
    userId
  firstName
  lastName
  phone
  email
  address1
  address2
  staffUserCoreTypeName
  staffUserSubCoreTypeName
  staffUserSubCoreTypeId
  staffUserSubCoreTypeSpeciality
  }

}`

export const FIND_ALL_USERS_BY_ORGANIZATION_NAME = gql ` query findAllUsersByOrganizationName($organizationName:String) {
  findAllUsersByOrganizationName(organizationName:$organizationName){
    userId
  firstName
  lastName
  phone
  email
  address1
  address2
  staffUserCoreTypeName
  staffUserSubCoreTypeName
  staffUserSubCoreTypeId
  staffUserSubCoreTypeSpeciality
  }

}`

export const UPDATE_PREFERRED_PROVIDERS = gql `mutation updatePreferredProviders($userIds:[Long], $organizationId:Long, $businessId:Long, $departmentId:Long) {
  updatePreferredProviders(
   userIds:$userIds
   organizationId:$organizationId
   businessId:$businessId
   departmentId:$departmentId
  )
}`;
export const FIND_ALL_PREFERRED_PROVIDERS_BY_SUBCORETYPEID = gql ` query findAllPreferredProviders($subCoreTypeId:[Long]) {
  findAllPreferredProviders(subCoreTypeId:$subCoreTypeId){
    userId
  firstName
  lastName
  phone
  email
  address1
  address2
  staffUserCoreTypeName
  staffUserSubCoreTypeName
  latitude
  longitude
  workspaces{
    businessId
  }
  }

}`



export const FIND_ALL_PARTNER_PROVIDERS = gql ` query findAllPartnerProviders($subCoreTypeId:[Long],$latitude: String, $longitude: String) {
  findAllPartnerProviders(subCoreTypeId:$subCoreTypeId, latitude: $latitude, longitude: $longitude){
    userId
  firstName
  lastName
  phone
  email
  address1
  address2
  staffUserCoreTypeName
  staffUserSubCoreTypeName
  latitude
  longitude 
  distance
  workspaces{
    businessId
  }
  }

}`
export const GET_ATTACHED_CASES_BY_CASE_ID = gql ` query findAttachedCases($caseId:Long) {
  findAttachedCases(caseId:$caseId) {
  clientId
  caseNumber
  noOfPersons
  clientCaseId
  clientDetails{
    firstName
    lastName
    emailAddress
    phoneNumber
  }
  }
} `
export const GET_CARE_TREATMENT_PLAN_PHASES = gql ` query findCareTreatmentPlanPhases($careTreatmentPlanId:Long) {
  findCareTreatmentPlanPhases(careTreatmentPlanId:$careTreatmentPlanId) {
    careTreatmentPlanId
    sno
    
   
  }
} `


export const CREATE_A_APPOINTMENT = gql `mutation createAAppointment($appointmentId:Long, $clientId: Long, $providerId: Long, $careTreatmentPlanId: Long, $referralId: Long, $caseId: Long,$organizationId:Long, $businessId:Long, $appointmentStatus:String, $appointmentDate:String, $notes:String,$files:[String], $timeSlot: String ) {
  createAAppointment( 
    appointmentId:$appointmentId,
    clientId: $clientId,
    providerId: $providerId,
    careTreatmentPlanId: $careTreatmentPlanId,
    referralId: $referralId,
    caseId: $caseId,
    organizationId:$organizationId,
    businessId:$businessId,
    appointmentStatus:$appointmentStatus,
    appointmentDate:$appointmentDate,
    notes:$notes,
    files:$files, 
    timeSlot: $timeSlot

  ) {
    appointmentId
  }
}`;

export const DELETE_APPOINTMENT = gql ` mutation DELETE_APPOINTMENT($appointmentId: Long!) {
  
  deleteAppointment(appointmentId:$appointmentId)

  }`;
  
export const GET_REFERRAL_NOTIFICATION_SETTINGS = gql ` query findReferralNotificationSettings($businessId:Long) {
  findReferralNotificationSettings(businessId:$businessId) {
    firstName
    businessId
    lastName
    emailAddress
    phoneNumber
    status
  }
} `;
export const CREATE_REFERRAL_NOTIFICATION_SETTINGS = gql `mutation createReferralNotificationSetting($organizationId:Long, $businessId: Long, $firstName: String, $lastName: String, $phoneNumber: String, $emailAddress: String, $status:String) {
  createReferralNotificationSetting( 
    organizationId: $organizationId
    businessId: $businessId
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    emailAddress: $emailAddress
    status: $status

  ) {
    businessId
  }
}`;
export const FIND_ALL_FLOAT_CARE_STAFF_MEMBERS = gql `query findAllStaffMembers($name: String, $email: String, $phone: String, $organizationId: Long, $firmType:String) {                    
  findAllStaffMembers(name:$name, email:$email, organizationId:$organizationId, phone: $phone, firmType:$firmType){
                                        userId
                                        firstName
                                        lastName
                                        gender
                                        email
                                        phone
                                        profilePhoto
                                        address1
                                        address2
                                        staffUserCoreTypeName
                                        staffUserSubCoreTypeName
                                        workspacesBasedOnOrganizationId(organizationId:$organizationId) {
                                          userWorkspaceId
                                        }
                                    }
                                  }`

export const INVITE_PROVIDER_FROM_LAW_FIRM = gql `mutation inviteFacilityOrProvider($preferredFacilityId: Long, $facilityId: Long, $providerId: Long, $consultantId: Long, $consultantFirmId: Long,
  $acceptedByFacility: Boolean, $caseNumber: String, $status: String, $referralId:Long, $caseId:Long, $isExistingProvider:Boolean) {
  inviteFacilityOrProvider(
   preferredFacilityId: $preferredFacilityId
facilityId: $facilityId
providerId: $providerId
consultantId: $consultantId
consultantFirmId: $consultantFirmId
acceptedByFacility:  $acceptedByFacility
caseNumber: $caseNumber
status: $status
referralId:$referralId
caseId:$caseId
isExistingProvider:$isExistingProvider

    ) {
     status
     preferredFacilityId
     facilityId
        }
    }`;

    export const INVITE_LAW_FIRM_FROM_CASE_CONSULTANT = gql `mutation inviteLawFirm($preferredLawFirmId: Long, $lawFirmId: Long, $consultantId: Long, $consultantFirmId: Long,
      $acceptedByLawFirm: Boolean, $caseNumber: String, $status: String, $isExistingLawFirm:Boolean, $lawFirmOrganizationId:Long) {
      inviteLawFirm(
       preferredLawFirmId: $preferredLawFirmId
    lawFirmId: $lawFirmId
    consultantId: $consultantId
    consultantFirmId: $consultantFirmId
    acceptedByLawFirm:  $acceptedByLawFirm
    caseNumber: $caseNumber
    status: $status
    isExistingLawFirm:$isExistingLawFirm
    lawFirmOrganizationId:$lawFirmOrganizationId
        ) {
         status
         preferredLawFirmId

            }
        }`;

    export const GET_INVITED_PROVIDER_DETAILS_FROM_LAW_FIRM_ID = gql ` query findAllFacilitiesByLawFirmId($consultantLawFirmId:Long) {
      findAllFacilitiesByLawFirmId(consultantLawFirmId:$consultantLawFirmId) {
        preferredFacilityId
        status
        providerId
        facilityId
        invitedProviderDetails{
          userId
      firstName
      lastName
      gender
      age
      phone
      email
        }
        invitedFacilityDetails{
      name
      phoneNumber
      email
        }
      }
    } `;
    export const GET_INVITED_LAW_FIRM_DETAILS_FROM_LAW_FIRM_ID = gql ` query findByPreferredLawFirmById($preferredLawFirmId:Long) {
      findByPreferredLawFirmById(preferredLawFirmId:$preferredLawFirmId) {
        lawFirmOrganizationId
        status
        
      }
    } `;

    export const GET_LAW_FIRM_DETAILS_FROM_LAW_FIRM_ID = gql ` query findAllLawFirmsByConsultantLawFirmId($consultantLawFirmId:Long) {
      findAllLawFirmsByConsultantLawFirmId(consultantLawFirmId:$consultantLawFirmId) {
        invitedLawFirmDetails{
          name
          address
          address2
          email
          phoneNumber
        }
        status
      }
    } `;
