#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]
then
  echo "Extracting Keys"
  mkdir -p .ssh
  echo ${GPG_KEY} > tmp.txt && gpg --batch --passphrase-fd 3 3<tmp.txt --output .ssh/deploy-key --decrypt ./deploy-key.gpg
  chmod go-rw -R .ssh
  echo 'ssh -i '${PWD}'/.ssh/deploy-key "$@"' > git-ssh-wrapper
  chmod +x git-ssh-wrapper
  echo "Pushing"
  GIT_SSH="${PWD}/git-ssh-wrapper" grunt push-doc-travis
fi