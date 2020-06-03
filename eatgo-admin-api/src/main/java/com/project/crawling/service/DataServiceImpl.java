//package kr.co.fastcampus.eatgo.service;
//
//import kr.co.fastcampus.eatgo.data.UserData;
//import kr.co.fastcampus.eatgo.repository.UserEntiRepository;
//import kr.co.fastcampus.eatgo.shared.UserDto;
//import lombok.extern.slf4j.Slf4j;
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Slf4j
//@Service
//public class DataServiceImpl implements DataService {
//
//    UserEntiRepository userEntiRepository;
//
//    @Autowired
//    public DataServiceImpl(UserEntiRepository userEntiRepository){
//        this.userEntiRepository =userEntiRepository;
//    }
//
//    @Override
//    public UserDto getUserByLocation(String location) {
//        UserData userData = userEntiRepository.findByLocation(location);
//
//        return new ModelMapper().map(userData, UserDto.class);
//
//    }
//
//
//}
