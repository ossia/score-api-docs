/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_change_element_name_8hpp_source.html",
"_expand_mode_8hpp_source.html",
"_midi_process_metadata_8hpp_source.html",
"_remove_slot_from_rack_8hpp_source.html",
"_unit_8hpp_source.html",
"class_automation_1_1_process_model.html#a85e48ce22117f89e27b7d7c81ab08364",
"class_curve_1_1_easing_segment.html#a8014f05668cc74e02bf3a5798adba227",
"class_curve_1_1_set_segment_tool.html#a1b6b1330b7de0c48d80a065e5e71887c",
"class_data_stream_writer.html#a09b0cc912a2b050291f41ad96cbabba6",
"class_dataflow_1_1_min_max_float_outlet_item.html#ad7e2d6055444c2d075a39fb85d6221c5",
"class_equality_test.html#a6982ec33cf1e7b18820aee1bc0a9a131",
"class_execution_1_1_sound_component.html#a0f601a52de23619866f6a67de950b9d2",
"class_explorer_1_1_device_document_plugin.html#aaf5d93494042b6c6dc6568325cf0f793",
"class_factor_oracle2_m_i_d_i_1_1_single_transition.html#a0d3e61735d67c877040920bc5cb204a8",
"class_gfx_1_1_video_1_1_model.html#aad58f2326f6ea4e7e5fa4c26e114155d",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_01std_1_1is__base__of_3_fa82f8e34463791cc3719bf96cdfa1aa.html#a98febf943a2b671be9f6ff7caeccc9ee",
"class_j_s_o_n_reader.html#a27abe9e1b3fb091a6cb635cfdf455cc6",
"class_j_s_o_n_writer.html#abb9760e348e4bfba6cfb87e1cf3b7a78",
"class_local_tree_1_1_time_sync.html",
"class_midi_1_1_add_note.html#a221b9b4c2e763ec91a3f17c085eaec01",
"class_nodal_1_1_nodal_executor.html#aca4e11e6c8befc25ad79ae180a93b8f3",
"class_pd_1_1_process_model.html",
"class_process_1_1_effect_process_factory___t.html#ae33cecfc594bb9a0a283599378c2ece9",
"class_process_1_1_outlet.html#aadc335881081f353496bd42ff6d0a4e9",
"class_protocols_1_1_artnet_device.html#af7cd92191628ba011899d8da7492f828",
"class_recording_1_1_application_plugin.html#a47018781f710ba5f2a761bf1a3ccc760",
"class_scenario_1_1_clickable_label_item.html#a986da3322b40719fa55e3df83c24452d",
"class_scenario_1_1_command_1_1_merge_time_syncs.html#af936c8e8d8ebcb5858ce738b91741fd7",
"class_scenario_1_1_comment_block_presenter.html#a6f9bcf612e34dc4ec6dffc428cb4b113",
"class_scenario_1_1_event_model.html#ac94a9aa10bed9f65690291c91ed139b5",
"class_scenario_1_1_interval_model.html#a2c66e9baf53179dfa405b6e53cee0e2c",
"class_scenario_1_1_layer_data.html#ad8516c309e43281fd97b28a56004771a",
"class_scenario_1_1_process_data_drop_handler.html",
"class_scenario_1_1_scenario_presenter.html#a737eb2ea39ce8b59e0fd1555230cfed6",
"class_scenario_1_1_state_model.html#ade2b83577b1321aed192f3b7d5954f6a",
"class_scenario_1_1_tool_palette.html#a5011c17ac3239078f589953120bfc1e0",
"class_spline_1_1_generator_dialog.html#ac434fadaf50538d458bb59b74d6546d5",
"class_transport_1_1_document_plugin.html#a48b539189230bae55933c35e92e479c2",
"class_video_1_1_video_decoder.html#ad48706a037de1cb8cded9ad8252816bb",
"classscore_1_1_command_stack.html#a58aa2fb41eab466cd0896c88730b0205",
"classscore_1_1_entity_list.html#aff10874decc93129b02c5209ab7a2c0c",
"classscore_1_1_log_messages_item_model.html#a656864dc3ff9e0397e1bd1454aff51c6",
"classscore_1_1_q_graphics_int_slider.html#ac3aa9b6a9bbdafcfc996f8306f8a4b9e",
"classscore_1_1_settings_command_base.html#ab19e71c5df6a1563a69851a6d2be3b7d",
"classscore_1_1_version.html#a8cbf43570b8d503906752b67e6b1e323",
"classscore__plugin__engine.html#a79492e30c707dfd8a40bfca38b865d5f",
"classvst3_1_1vst__node__base.html#a30fb6a5d4495a041e3f42ba547b56fb2",
"namespacescore.html",
"struct_boost_variant2_data_stream_deserializer.html#a70fdecc5908533e8f6ad084320fffd4a",
"struct_control_1_1_unvalidated_enum.html#a13b335fcb92b98c4560cf5e452e2d30e",
"struct_device_1_1_address_settings_common.html#a6d753213a5ba8714fba47eee0285c7ed",
"struct_faust_1_1_u_i.html#a2cc9d4f149ab68ff80bd77c92ac201fc",
"struct_j_s_o_n_reader_1_1assigner.html#aacdc45b055effbf6b00010df675d915e",
"struct_l_v2_1_1on__start.html#a67cad3b61d1918a37d1ab7425f59e059",
"struct_media_1_1_sound_1_1_waveform_request.html#a1302ec724a505a6bc677d888ffbf837c",
"struct_nodes_1_1_math_audio_generator_1_1_node_1_1_metadata.html",
"struct_process_1_1_pixmaps.html#a5eddb2c57c3ceb88cb475c6248907a38",
"struct_q_meta_type_id_3_01_curve_1_1_power_segment_data_01_4.html#a00f8986c49ce3d24fc8f202dc58635e1abb072179b4230610ae951cd100c9ac09",
"struct_recording_1_1_record_context.html#a1ca64957cbe478eacec8f881645b2d58",
"struct_scenario_1_1_encaps_data.html#a862199a38c30a8008c0a7e037ab1c666",
"struct_scenario_1_1value__size.html#a14224f71dbbd24cbe4c2b6125e19cd47",
"struct_t_serializer_3_01_j_s_o_n_object_00_01_model_3_01_info_00_01_control_1_1is__control_01_4_01_4.html",
"structboost_1_1spirit_1_1traits_1_1container__value_3_01_q_string_01_4.html",
"structscore_1_1_document_context.html#ad667dcddef2b41f4ca2109a316edf6da",
"structscore_1_1_slider_wrapper.html#add3d777db62f3f074aafb0e6c8a314b0",
"structscore_1_1gfx_1_1_empty_decoder.html#a03f106c7e858668c44933aa13c17d7c6",
"structscore_1_1gfx_1_1isf__input__port__vis.html#a145151941322296b1636cbed221ae023",
"structvst3_1_1_window_container.html#a87121fef9315c3725bd504aa267daf91"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';