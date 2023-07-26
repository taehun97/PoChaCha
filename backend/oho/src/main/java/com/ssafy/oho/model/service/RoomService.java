package com.ssafy.oho.model.service;

import com.ssafy.oho.model.dto.request.PlayerRequestDto;
import com.ssafy.oho.model.dto.request.RoomRequestDto;
import com.ssafy.oho.model.dto.response.RoomResponseDto;
import com.ssafy.oho.model.entity.Room;
import com.ssafy.oho.model.repository.RoomRepository;
import com.ssafy.oho.util.exception.RoomSetException;
import com.ssafy.oho.util.exception.RoomUpdateException;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    private RoomService(RoomRepository roomRepository){
        this.roomRepository=roomRepository;
    }

    /* 방 만들기 전까지는 String 타입의 메시지로 전달 */
    public RoomResponseDto setRoom(PlayerRequestDto playerRequestDto) throws RoomSetException {
        try {
            Room room = new Room();
            RoomResponseDto roomResponseDto = new RoomResponseDto();

            /* CONFIRM :: Builder 사용 확인 시 변경 */
            String id;
            do {
                id = RandomStringUtils.random(20, true, true);
            } while(roomRepository.existsById(id));
            room.setId(id);

            Room roomResult = roomRepository.save(room);

            roomResponseDto.setId(roomResult.getId());
            roomResponseDto.setSecret(roomResult.isSecret());
            roomResponseDto.setProgress(roomResult.isProgress());

            return roomResponseDto;
        } catch(Exception e) {
            System.out.println(e.getMessage());
            throw new RoomSetException();
        }
    }

    public RoomResponseDto getRoom(RoomRequestDto roomRequestDto) {
        /* 
            TO DO :: 사용자(JWT)가 현재 방에 존재하는 사람인지 검사
         */
        
        Room room = roomRepository.findById(roomRequestDto.getId());
        RoomResponseDto roomResponseDto = new RoomResponseDto();

        /* CONFIRM :: Builder 사용 확인 시 변경 */
        roomResponseDto.setId(room.getId());
        roomResponseDto.setSecret(room.isSecret());
        roomResponseDto.setProgress(room.isProgress());

        return roomResponseDto;
    }

    public RoomResponseDto updateRoom(RoomRequestDto roomRequestDto) throws RoomUpdateException {
        String id = roomRequestDto.getId();
        boolean secret = roomRequestDto.isSecret();
        boolean progress = roomRequestDto.isProgress();

        // 유효성 검사
        if(id == null || id.trim().equals("") || id.trim().length() > 20) throw new RoomUpdateException();
        /*
            TO DO :: request 보낸 플레이어가 현재 방의 방장인지 확인
        */

        try {
            Room room = new Room();
            RoomResponseDto roomResponseDto = new RoomResponseDto();

            /* CONFIRM :: Builder 사용 확인 시 변경 */
            room.setId(id);
            room.setSecret(secret);
            room.setProgress(progress);

            roomRepository.save(room);

            roomResponseDto.setId(id);
            roomResponseDto.setSecret(secret);
            roomResponseDto.setProgress(progress);

            return roomResponseDto;
        } catch(Exception e) {
            throw new RoomUpdateException();
        }
    }
}