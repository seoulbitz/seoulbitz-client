import firebase from '@/services/firebase';
import { SanityClient } from '@sanity/client';

export enum CheckUserSurveySubmissionResult {
  userNotFound = 'userNotFound',
  neverSubmitted = 'neverSubmitted',
  everSubmitted = 'everSubmitted'
}

export enum SurveySubmitResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export enum RemoveSurveyResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export const createUserSurveyService = (client: SanityClient) => {
  const checkUserSubmission = async () => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return CheckUserSurveySubmissionResult.userNotFound;
      }

      const query = `*[_type == "userSurvey" && userId == "${user.uid}"]`;
      const surveys = await client.fetch(query);
      if (surveys.length === 0) {
        return CheckUserSurveySubmissionResult.neverSubmitted;
      }

      return CheckUserSurveySubmissionResult.everSubmitted;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const submit = async (data: { q1: string; q2: string; q3: string }) => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return SurveySubmitResult.userNotFound;
      }
      const { q1, q2, q3 } = data;

      await client.create({
        _type: 'userSurvey',
        userId: user.uid,
        q1,
        q2,
        q3
      });
      return SurveySubmitResult.success;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  // TODO: write remove survey method to use when deleting an account
  // const removeSurvey = async () => {
  //   try {
  //     const user = await firebase.auth.getVerifiedUser();
  //     if (!user) {
  //       return RemoveSurveyResult.userNotFound;
  //     }

  //     const query = ``;

  //   } catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // };

  return {
    checkUserSubmission,
    submit
    // removeSurvey
  };
};
